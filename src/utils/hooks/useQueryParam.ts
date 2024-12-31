import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * activeState의 변경에 따라 queryParam을 변경하는 hook
 *
 * @param queryParamKey query parameter key
 * @param defaultValue
 * @param state2params state<T>를 query parameter로 변경하는 함수(state: string이면 생략 가능)
 * @param params2state query parameter를 state<T>로 변경하는 함수(stete: string이면 생략 가능)
 * @returns activeState: 현재 query parameter의 값, changeState: query parameter의 값을 변경하는 함수
 */
export const useQueryParam = <T = string>(
  queryParamKey: string,
  defaultValue: T,
  state2params?: (state: T) => string,
  params2state?: (params: string) => T,
) => {
  const [activeState, setActiveState] = useState<T>(defaultValue);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const queryValue = searchParams.get(queryParamKey);
    if (queryValue) {
      setActiveState(params2state ? params2state(queryValue) : (queryValue as T));
    } else {
      searchParams.set(
        queryParamKey,
        state2params ? state2params(defaultValue) : (defaultValue as string),
      );
      setActiveState(defaultValue);
      setSearchParams(searchParams, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeState = (value: T) => {
    searchParams.set(queryParamKey, state2params ? state2params(value) : (value as string));
    setActiveState(value);
    setSearchParams(searchParams, { replace: true });
  };

  return { activeState, changeState };
};
