import { setAlert, setLoading } from "@/redux/common";
import store from "@/store";
import Axios from "axios";
import { METHOD_POST, TOKEN_NAME } from "./constants";

Axios.interceptors.response.use(
  (response) => {
    if (response) {
      // if (response.data.statusCode === STATUS_422) {
      //   store.dispatch(
      //     setNotification({
      //       show: true,
      //       message: response.data?.message,
      //       status: 'error',
      //     })
      //   );
      // }
    }

    return response;
  },
  (error) => {
    // if (error.response.status === 400) {
    //   store.dispatch(
    //     setNotification({
    //       isShow: true,
    //       message: error.response.data.message ?? error.message,
    //       status: 'error',
    //     })
    //   );
    // }
    // if (error.response.status === STATUS_401) {
    //   store.dispatch(setUnauthorized(true));
    // }

    // if (error.response.status === STATUS_403) {
    //   store.dispatch(setAuthorizedYet(true));
    // }

    // if (error.response.status === STATUS_503) {
    //   store.dispatch(setServiceMaintenance(true));
    // }

    // if (error.response.status === STATUS_404) {
    //   // globalRouter.navigate(PATH.NOTFOUND)
    // }
    store.dispatch(
      setAlert({
        open: true,
        message: error.response.data.message ?? error.message,
        type: "error"
      })
    );
    return error.response;
  }
);

async function defaultGet(endpoint) {
  const data = await Axios({
    method: METHOD_GET,
    url: endpoint
  });
  return data;
}

export async function getData({ url, onSuccess }) {
  try {
    const res = await defaultGet(url);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
    store.dispatch(setLoading(false));
  } finally {
    store.dispatch(setLoading(false));
  }
}

export async function authGet(endpoint) {
  const token = localStorage.getItem(TOKEN_NAME);

  const data = await Axios({
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: METHOD_GET,
    url: endpoint
  });

  return data;
}
export async function authGetData({ url, onSuccess }) {
  try {
    const res = await authGet(url);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
    store.dispatch(setLoading(false));
  } finally {
    store.dispatch(setLoading(false));
  }
}

async function defaultPost(endpoint, method, payload) {
  const body = {};
  Object.keys(payload).forEach((key) => {
    body[key] = payload[key];

    if (
      payload[key] ||
      typeof payload[key] === "boolean" ||
      typeof payload[key] === "number"
    ) {
      body[key] = payload[key];
    }
    return null;
  });
  return Axios({
    headers: {},
    method,
    url: endpoint,
    data: body
  });
}

export async function postPutData({
  url,
  payload,
  method = METHOD_POST,
  onSuccess
}) {
  try {
    const res = await defaultPost(url, method, payload);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
    store.dispatch(setLoading(false));
  } finally {
    store.dispatch(setLoading(false));
  }
}

async function authPostPut(endpoint, method, payload) {
  const token = localStorage.getItem(TOKEN_NAME);
  const body = {};
  Object.keys(payload).forEach((key) => {
    if (
      payload[key] ||
      typeof payload[key] === "boolean" ||
      typeof payload[key] === "number"
    ) {
      body[key] = payload[key];
    }
    return {};
  });
  return Axios({
    headers: {
      Authorization: `Bearer ${token}`
    },
    method,
    url: endpoint,
    data: body
  });
}

export async function authPostPutData({ url, method, payload, onSuccess }) {
  try {
    const res = await authPostPut(url, method, payload);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
    store.dispatch(setLoading(true));
  } finally {
    store.dispatch(setLoading(false));
  }
}

async function authDelete(endpoint, body) {
  const token = localStorage.getItem(TOKEN_NAME);
  return Axios({
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: METHOD_DELETE,
    url: endpoint,
    data: body
  });
}

export async function startDelete({ url, payload, onSuccess }) {
  try {
    const res = await authDelete(url, payload);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
    store.dispatch(setLoading(false));
  } finally {
    store.dispatch(setLoading(false));
  }
}

export async function authPostFormData(endpoint, method, payload) {
  const token = localStorage.getItem(TOKEN_NAME);
  const body = {};

  Object.keys(payload).forEach((key) => {
    if (
      payload[key] ||
      typeof payload[key] === "boolean" ||
      typeof payload[key] === "number"
    ) {
      body[key] = payload[key];
    }
    return {};
  });
  const formData = new FormData();
  Object.keys(body).forEach((key) => formData.append(key, body[key]));

  if (body.imageFile) {
    formData.append("file", body.imageFile);
  }

  return Axios({
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: "multipart/form-data"
    },
    method,
    url: endpoint,
    data: formData
  });
}

export async function authPostFileData({ url, method, payload, onSuccess }) {
  try {
    const res = await authPostFormData(url, method, payload);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
    store.dispatch(setLoading(false));
  } finally {
    store.dispatch(setLoading(false));
  }
}

export function getFileName(response) {
  let filename = "";
  const disposition = response.headers["content-disposition"];
  if (disposition && disposition.indexOf("filename") !== -1) {
    const filenameRegex = /UTF-8(.*)/;
    const matches = filenameRegex.exec(disposition);
    if (matches != null && matches[1]) {
      filename = decodeURIComponent(matches[1].replace(/['"]/g, ""));
    }
  }
  return filename;
}
export async function downloadFile({ endpoint }) {
  const token = localStorage.getItem(TOKEN_NAME);
  try {
    const res = await Axios({
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      responseType: "blob",
      method: "GET",
      url: endpoint
    });

    const fileName = getFileName(res);
    if (res && res.data && res.status === 200) {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName || "template.xlsx");
      document.body.appendChild(link);
      link.click();
    }
    if (res && res.data && res.status === 422) {
      store.dispatch(
        setNotification({
          show: true,
          message: `Hãy nhập đủ điều kiện tìm kiếm`,
          status: "error"
        })
      );
    }
    if (fileName === "") {
      const resTypeText = await Axios({
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: endpoint
      });
      store.dispatch(
        setNotification({
          show: true,
          message: resTypeText?.data?.message,
          status: "success"
        })
      );
    }
  } catch (err) {
    store.dispatch(setLoading(false));
  } finally {
    store.dispatch(setLoading(false));
  }
}
