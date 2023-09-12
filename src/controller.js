


export const getController = async (req, res) => {
  const {slack_name, track} = req.query;
  const date_day = 'Monday';
  const utcTime = new Date(Date.now()).toISOString().split('.')[0] + 'Z';
  const github_file_url = 'https://github.com/cj-prince/HNG-Repo';
  const github_repo_url =
    'https://github.com/cj-prince/HNG-Repo.git';

  const result = {
    slack_name: slack_name,
    date_day: date_day,
    utc_Time: utcTime,
    track: track,
    github_file_url: github_file_url,
    github_repo_url: github_repo_url,
  };
  res
    .status(200)
    .json({ message: 'Users Fetched successfully', result });
};
