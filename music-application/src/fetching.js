export async function FetchingData(information) {
  try {
    const response = await fetch("http://localhost:3000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    });
    if (!response.ok) {
      throw new Error("Failed to send info");
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error.message || "failed to fetch");
  }
}
export async function FetchingLogin(information) {
  try {
    const response = await fetch("http://localhost:3000/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    });
    if (!response.ok) {
      throw new Error("Failed to send enter");
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error.message || "failed to fetch");
  }
}

export async function FetchingComments(info) {
  try {
    const response = await fetch("http://localhost:3000/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (!response.ok) {
      throw new Error("Failed to send comment");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message || "failed to fetch");
  }
}
export async function FetchingGetComments(name) {
  try {
    const response = await fetch("http://localhost:3000/getcomment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name}),
    });

    if (!response.ok) {
      throw new Error("Failed to get comment");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message || "Failed to fetch comments");
  }
}

