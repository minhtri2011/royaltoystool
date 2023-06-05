import { useState } from "react";
import { useSelector } from "react-redux";
import { getPostData } from "../redux/slices/postSlice";
import { useEffect } from "react";

const useCheckVersion = () => {
  const postReducer = useSelector(getPostData);
  const [check, setCheck] = useState(false);
  const { versionNote, versions, versionLimit, versionName } = postReducer;

  useEffect(() => {
    if (versionNote || versionLimit || versions.length > 0 || versionName) {
      setCheck(true);
    } else setCheck(false);
  }, [postReducer]);
  return check;
};

export default useCheckVersion;
