let log = (...any) => console.log(any)
let de = ({
              size = 'big',
              coords: { //  初期化の自由度を保ちたい場合は、親自体を初期化させないこと。
                  x: xVal = 0,
                  y: yVal = 0,
                  z: zVal = 0
                  },
              radius = 25 }) => {
    log(size, [xVal, yVal, zVal], radius)
};
(main = () => {
    de({
        coords: {
            x: 10,
            z: 20
        }
    })
})();