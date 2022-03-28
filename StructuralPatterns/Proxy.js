// https://velog.io/@doondoony/JavaScript-Proxy-101

const cats = [
  {name: 'DD', age: 4, color: 'coffee'},
  {name: 'TT', age: 4, color: 'gray'},
];

const catsProxy = new Proxy(cats, {
  // [[Get]] 의 동작에 추가 기능을 구현 합니다
  get: function(target, property) {
    const ret = target[property];
    const { name } = ret;
    console.log(`Come here ${name}!`)
    return ret;
  }
});

catsProxy[0] // Come here DD!

export { cats }