import { useEffect, useState } from "react";

const useDocumentTitle = (title=`Glowing Flowers | Plants & Gifts`) => {
  const [titleTab, setTitleTab] = useState(title);

  useEffect(() => {
    document.title = titleTab;
  }, [titleTab]);

  return [titleTab, setTitleTab];
};

export { useDocumentTitle };
