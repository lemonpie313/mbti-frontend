// components/Playlist.tsx
import React, { useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";

type SpotifyTrack = {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string; height: number; width: number }[] };
  external_urls: { spotify: string };
};

interface PlaylistProps {
  artistId: string;
  token: string;
}

const Playlist: React.FC<PlaylistProps> = ({ artistId, token }) => {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!artistId || !token) return;

    const controller = new AbortController();
    const fetchTopTracks = async () => {
      try {
        setLoading(true);
        setErr(null);

        const res = await fetch(
          `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=KR`,
          {
            headers: { Authorization: `Bearer ${token}` },
            signal: controller.signal,
          }
        );
        if (!res.ok) {
          const t = await res.text();
          throw new Error(`Spotify API 실패: ${res.status} ${t}`);
        }
        const data = await res.json();
        setTracks((data.tracks || []).slice(0, 7));
      } catch (e: any) {
        if (e.name !== "AbortError") setErr(e.message || "불러오기 실패");
      } finally {
        setLoading(false);
      }
    };

    fetchTopTracks();
    return () => controller.abort();
  }, [artistId, token]);

  const items = useMemo(
    () =>
      tracks.map((t) => {
        const img =
          t.album?.images?.[1]?.url || t.album?.images?.[0]?.url || "/fallback.png";
        const artist = t.artists?.map((a) => a.name).join(", ") || "Unknown";
        return { id: t.id, title: t.name, artist, image: img, url: t.external_urls?.spotify };
      }),
    [tracks]
  );

  return (
    <Box sx={{ mt: 2 }}>
      {loading && (
        <Typography fontSize="0.9rem" color="text.secondary">
          스포티파이에서 곡을 불러오는 중이에요…
        </Typography>
      )}
      {err && (
        <Typography fontSize="0.9rem" color="error.main">
          {err}
        </Typography>
      )}
      {!loading &&
        !err &&
        items.map((song) => (
          <Box
            key={song.id}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              cursor: song.url ? "pointer" : "default",
            }}
            onClick={() => song.url && window.open(song.url, "_blank")}
          >
            <Avatar variant="square" src={song.image} sx={{ width: 48, height: 48, mr: 1 }} />
            <Box sx={{ textAlign: "left" }}>
              <Typography fontSize="0.9rem" noWrap title={song.title}>
                {song.title}
              </Typography>
              <Typography fontSize="0.75rem" color="text.secondary" noWrap title={song.artist}>
                {song.artist}
              </Typography>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default Playlist;