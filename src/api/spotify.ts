import api from "./axiosInstance.ts";
import { SpotifyTokenResponse } from "./types/spotify";

export async function getSpotifyToken(): Promise<SpotifyTokenResponse> {
  const res = await api.get<SpotifyTokenResponse>("/spotify/token");
  return res.data;
}
