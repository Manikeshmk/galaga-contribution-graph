import { ContributionDay } from '../types.js';

export const Providers = {
	async fetchGithubContributions(store: any): Promise<ContributionDay[]> {
		const username = store.config.username;
		const token = store.config.githubSettings?.accessToken;

		if (!token) throw new Error('Missing GitHub Access Token parsing credential.');

		const query = `
			query($username: String!) {
				user(login: $username) {
					contributionsCollection {
						contributionCalendar {
							weeks {
								contributionDays {
									date
									contributionCount
									contributionLevel
								}
							}
						}
					}
				}
			}
		`;

		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query, variables: { username } })
		});

		const json: any = await response.json();
		if (json.errors) throw new Error(JSON.stringify(json.errors));

		const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
		const rawDays = weeks.flatMap((w: any) => w.contributionDays);

		const levelMap: Record<string, any> = {
			NONE: 'NONE',
			FIRST_QUARTILE: 'FIRST_QUARTILE',
			SECOND_QUARTILE: 'SECOND_QUARTILE',
			THIRD_QUARTILE: 'THIRD_QUARTILE',
			FOURTH_QUARTILE: 'FOURTH_QUARTILE'
		};

		return rawDays.map((d: any) => ({
			date: d.date,
			count: d.contributionCount,
			level: levelMap[d.contributionLevel] || 'NONE'
		}));
	},

	async fetchGitlabContributions(_store: any): Promise<ContributionDay[]> {
		return []; // Fallback placeholder
	}
};
