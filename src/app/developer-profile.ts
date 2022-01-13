export class DeveloperProfile {
  private constructor(
    public login: string,
    public followers: number,
    public followings: number,
    public avatar: string,
    public bio: string,
    public publicRepositories: number,
    public location: string
  ) {}

  static from(response: ResponseGithub): DeveloperProfile {
    return new DeveloperProfile(
      response.login,
      response.followers,
      response.following,
      response.avatar_url,
      response.bio,
      response.public_repos,
      response.location
    );
  }
}

export interface ResponseGithub {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null | string;
  hireable: null | string;
  bio: string;
  twitter_username: null | string;
  public_repos: 13;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
