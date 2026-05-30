import * as core from '@actions/core'; // Changed to a wildcard named import
import fs from 'fs';
import path from 'path';
import { GalagaRenderer } from './src/galaga/index.ts';

async function run() {
  try {
    const token = core.getInput('github_token') || process.env.INPUT_GITHUB_TOKEN;
    const repository = process.env.GITHUB_REPOSITORY || "manikeshmk/manikeshmk";
    const [owner] = repository.split('/');

    core.info(`🚀 Starting execution sequence mapping for target user profile: ${owner}`);

    const renderer = new GalagaRenderer({
      platform: 'github',
      username: owner,
      githubSettings: { accessToken: token },
      svgCallback: (svgContent) => {
        const outputDir = path.join(process.cwd(), 'dist');
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        fs.writeFileSync(path.join(outputDir, 'galaga.svg'), svgContent);
        core.info('🎯 SVG pipeline output compiled successfully to dist/galaga.svg');
      },
      gameOverCallback: () => {
        core.info('🎮 Simulation cycle completed successfully.');
      },
      pointsIncreasedCallback: (points) => {
        // Optional logger hook
      }
    });

    await renderer.start();
  } catch (error) {
    core.setFailed(`Engine failure: ${error.message}`); // Will resolve perfectly now
  }
}

run();
