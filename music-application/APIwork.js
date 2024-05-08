const APIController = (function () {
  const clientId = "9b776d3ad76041a4af59e3340c2df236";
  const clientSecret = "88f77ca615ef40d3922500094962799c";

  const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;
  };

  const _getGenres = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data.categories.items;
  };

  const _getPlaylistByGenre = async (token, genreId) => {
    const limit = 20;

    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();
    return data.playlists.items;
  };

  const _getTracks = async (token, tracksEndPoint) => {
    const result = await fetch(`${tracksEndPoint}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data;
  };

  const _getTrack = async (token, trackEndPoint) => {
    const result = await fetch(`${trackEndPoint}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data;
  };
  const _getNewReleases = async (token) => {
    const result = await fetch(
      `https://api.spotify.com/v1/browse/new-releases`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();
    return data;
  };

  const _getAlbumTracks = async (token, albumEndPoint) => {
    const result = await fetch(`${albumEndPoint}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await result.json();
    return data;
  };
  const _searchAlbums = async (token, name, type) => {
    const result = await fetch(
      `https://api.spotify.com/v1/search?q=${name}&type=${type}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const data = await result.json();
    return data;
  };
  return {
    getToken() {
      return _getToken();
    },
    getGenres(token) {
      return _getGenres(token);
    },
    getPlaylistByGenre(token, genreId) {
      return _getPlaylistByGenre(token, genreId);
    },
    getTracks(token, tracksEndPoint) {
      return _getTracks(token, tracksEndPoint);
    },
    getTrack(token, trackEndPoint) {
      return _getTrack(token, trackEndPoint);
    },
    getNewReleases(token) {
      return _getNewReleases(token);
    },
    getAlbumTracks(token, albumEndPoint) {
      return _getAlbumTracks(token, albumEndPoint);
    },
    searchAlbums(token, name, type) {
      return _searchAlbums(token, name, type);
    },
  };
})();

export default APIController;
