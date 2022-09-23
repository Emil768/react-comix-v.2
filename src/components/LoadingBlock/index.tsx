import React from "react";
import ContentLoader from "react-content-loader";
function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={251}
      height={401}
      viewBox="0 0 251 401"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="26" y="10" rx="15" ry="15" width="168" height="250" />
      <rect x="5" y="290" rx="0" ry="0" width="213" height="34" />
      <rect x="5" y="338" rx="0" ry="0" width="213" height="37" />
    </ContentLoader>
  );
}

export default LoadingBlock;
