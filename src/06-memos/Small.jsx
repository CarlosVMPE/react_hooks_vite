import React from "react";

export const Small = React.memo(({ value }) => {
    console.log('asd');
  return <small>{value}</small>;
});
