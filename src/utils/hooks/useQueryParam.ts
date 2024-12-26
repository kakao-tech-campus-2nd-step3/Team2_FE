import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * activeState의 변경에 따라 queryParam을 변경하는 hook
 *
 * @param queryParamKey query parameter key
 * @param defaultValue
 * @returns activeState: 현재 query parameter의 값, changeState: query parameter의 값을 변경하는 함수
 */
export const useQueryParam = (queryParamKey: string, defaultValue: string) => {
  const [activeState, setActiveState] = useState(defaultValue);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const queryValue = searchParams.get(queryParamKey);
    if (queryValue) {
      setActiveState(queryValue);
    } else {
      searchParams.set(queryParamKey, defaultValue);
      setActiveState(defaultValue);
      setSearchParams(searchParams, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeState = (value: string) => {
    searchParams.set(queryParamKey, value);
    setActiveState(value);
    setSearchParams(searchParams, { replace: true });
  };

  return { activeState, changeState };
};
