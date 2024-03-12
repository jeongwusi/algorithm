function solution(s) {
  const bits = (str, cnt, rem) => {
    if (str === "1") return [cnt, rem];
    const onlyOneLng = str.replaceAll("0", "").length;
    const zeroLng = str.length - onlyOneLng;
    return bits(onlyOneLng.toString(2), cnt + 1, rem + zeroLng);
  };

  return bits(s, 0, 0);
}

console.log(solution("110010101001"));
