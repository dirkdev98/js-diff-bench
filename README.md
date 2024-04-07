# js-diff-bench

Usage

```shell
npm install

node ./compare_output.js 1 # Or any other available sample in /samples
npm run bench:1 # Or any other available sample in /samples
```

Expected output;

- diff-match-patch & fast-diff are pretty much as fast.
- diff-match-patch always bails out after 2 seconds
