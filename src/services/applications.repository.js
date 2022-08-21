/**
 * gets a list of all application data associated with the portfolio owner
 * @return {Promise<{id: number, title: string, description: string, url: string, github: string, image: string}[]>}
 */
export function getAllApplications() {
  return import('../data/application.json').then((imported) => imported.default);
}
