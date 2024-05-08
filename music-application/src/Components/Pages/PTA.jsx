/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { apiActions, pageActions } from "../../store";
import APIController from "../../../APIwork";
import CustomAudio from "../CustomAudio";
export default function PTA({
  searchField,
  playlistInfo,
  albumInfo,
  trackInfo,
}) {
  const token = useSelector((state) => state.api.token);
  const dispatch = useDispatch();

  async function handleChoosingAlbum(tracksEndPoint, albumName) {
    const albumTracks = await APIController.getAlbumTracks(
      token,
      tracksEndPoint
    );
    console.log(albumTracks);
    dispatch(apiActions.acquireAlbum(albumTracks));
    dispatch(apiActions.acquireAlbumName(albumName));
    dispatch(pageActions.changePage("album"));
  }

  return (
    <div className="PTA">
      <div className="PTAmain">
        <Fade>
          <p className="PTAtext">Albums</p>
          <ul className="PTAContainer">
            {albumInfo.items.map((album) => {
              return (
                <li key={album.id}>
                  <button
                    className="button"
                    onClick={() => handleChoosingAlbum(album.href, album.name)}
                  >
                    <img src={album.images[1].url} />
                    <p>{album.name}</p>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="PTAtext">Playlists</p>
          <ul className="PTAContainer">
            {playlistInfo.items.map((playlist) => {
              return (
                <li key={playlist.id}>
                  <button
                    className="button"
                    onClick={() =>
                      handleChoosingAlbum(playlist.href, playlist.name)
                    }
                  >
                    <img
                      className="playlistImages"
                      src={playlist.images[0].url}
                    />
                    <p>{playlist.name}</p>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="PTAtext">Tracks</p>
          <ul className="AlbumTracksContainer">
            {trackInfo.items.map((track) => {
              return (
                <li key={track.id}>
                  <CustomAudio audioUrl={track.preview_url} />
                  <p>{track.name}</p>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
    </div>
  );
}
