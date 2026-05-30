import { graphql } from "@octokit/graphql";
import fs from "fs";
import path from "path";

// Extract automated contextual environments securely
const token = process.env.INPUT_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_REPOSITORY_OWNER;

if (!token) {
  console.error("❌ Missing GITHUB_TOKEN environment input profile configuration context.");
  process.exit(1);
}

const graphqlWithAuth = graphql.defaults({
  headers: { authorization: `token ${token}` },
});

async function main() {
  console.log(`🚀 Starting execution sequence mapping for target user profile: ${username}`);
  
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
              }
            }
          }
        }
      }
    }
  `;
  
  try {
    const response = await graphqlWithAuth(query, { login: username });
    const weeks = response.user.contributionsCollection.contributionCalendar.weeks;
    
    // Vector Dimension Framework Constraints
    const boxSize = 10;
    const gap = 2;
    const topPadding = 20;
    const leftPadding = 10;
    const shipSpace = 60;
    const width = 53 * (boxSize + gap) + leftPadding * 2;
    const height = 7 * (boxSize + gap) + topPadding + shipSpace;

    let svgElements = "";
    let animationStyles = "";

    weeks.forEach((week, xIdx) => {
      week.contributionDays.forEach((day, yIdx) => {
        const x = leftPadding + xIdx * (boxSize + gap);
        const y = topPadding + yIdx * (boxSize + gap);
        
        // Exact intensity mapping logic variables
        let color = "#161b22";
        if (day.contributionCount > 0 && day.contributionCount <= 3) color = "#0e4429";
        else if (day.contributionCount <= 6) color = "#006d32";
        else if (day.contributionCount <= 9) color = "#26a641";
        else if (day.contributionCount > 9) color = "#39d353";

        const blockId = `b-${xIdx}-${yIdx}`;
        svgElements += `<rect id="${blockId}" x="${x}" y="${y}" width="${boxSize}" height="${boxSize}" fill="${color}" />\n`;

        if (day.contributionCount > 0) {
          const delay = (xIdx * 0.4 + yIdx * 0.1).toFixed(1);
          animationStyles += `
            #${blockId} { animation: d-${blockId} 0.2s forwards ${parseFloat(delay) + 1.2}s; }
            @keyframes d-${blockId} { 100% { opacity: 0.1; fill: #161b22; } }
            #l-${blockId} { animation: f-${blockId} 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards ${delay}s; }
            @keyframes f-${blockId} { 0% { opacity: 0; transform: translateY(0); } 10% { opacity: 1; } 100% { transform: translateY(-${height - y - 45}px); opacity: 0; } }
          `;
          svgElements += `<g id="l-${blockId}" opacity="0"><rect x="${x + 4}" y="${height - 45}" width="2" height="12" fill="#00ffff" /></g>`;
        }
      });
    });

    const finalSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" style="background: #0d1117;">
      <style>${animationStyles}</style>
      <g>${svgElements}</g>
      <g transform="translate(${width / 2 - 13}, ${height - 35}) scale(1.5)">
        <path fill="#ffffff" style="filter: drop-shadow(0 0 4px #00ffff)" d="M9,0 L11,0 L11,3 L13,3 L13,6 L17,6 L17,9 L19,9 L19,15 L1,15 L1,9 L3,9 L3,6 L7,6 L7,3 L9,3 Z" />
      </g>
    </svg>`.trim();

    const distDir = path.join(process.env.GITHUB_WORKSPACE || ".", "dist");
    if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
    fs.writeFileSync(path.join(distDir, "galaga.svg"), finalSvg);
    console.log("🎯 SVG pipeline output compiled successfully to dist/galaga.svg");
    
  } catch (err) {
    console.error("❌ Execution engine failed during API data fetching:", err);
    process.exit(1);
  }
}

main();
