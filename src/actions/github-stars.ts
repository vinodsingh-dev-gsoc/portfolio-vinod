"use server";

import { config } from "@/data/config";

// unauthenticated github api = 60 req/hr per ip; 5min cache -> ~12 req/hr
export async function getGithubStars(): Promise<number> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-app",
        },
      },
    );
    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      console.error(
        "GitHub stars fetch failed:",
        res.status,
        res.statusText,
        errorBody
      );
      return 0;
    }

    const data = await res.json();
    if (typeof data.stargazers_count !== "number") {
      console.error(
        "GitHub stars response missing stargazers_count:",
        data
      );
      return 0;
    }
    return data.stargazers_count;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return 0;
  }
}
