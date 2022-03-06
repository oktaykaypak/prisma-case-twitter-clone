import mock from "@/@fake-db/mock";
import * as tweet from "../tweets.json";
import * as user from "../user.json";

function merger() {
  /**
   * * We have two different fakedb files.
   * * Our .json files with user and tweets are imported.
   * * From our files with data between 0-5000, 150 data are randomly selected and combined with array merge
   * * The combined 150 data is transmitted from the API as a response.
   */
  const max = 4999,
    min = 1;
  const dataset = [];
  for (var i = 0; i < 150; i++) {
    const a = Math.floor(Math.random() * (max - min + 1) + min);
    dataset.push({ ...user.default[a], ...tweet.default[a], comment: a });
  }
  return dataset;
}

mock.onGet("/tweet").reply(() => {
  /** 
   * ? fakeApi
   */
  return [200, merger()];
});
