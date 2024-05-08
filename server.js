const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const port = 3001;

const {
  EasyCodef,
  EasyCodefConstant,
  EasyCodefUtil,
} = require("easycodef-node");

//코드에프 가입을 통해 발급 받은 클라이언트 정보 - 데모
const DEMO_CLIENT_ID = "0fe19934-bb05-4cfa-812f-16835392068f";
const DEMO_CLIENT_SECRET = "5bcc0076-3685-4646-846a-68e72db3f9f5";

// 코드에프 가입을 통해 발급 받은 클라이언트 정보- 정식
const CLIENT_ID = "a4d7a0ea-b1c6-4f65-a11c-b2ebff767352";
const CLIENT_SECRET = "2b24b7b6-17d4-4568-b818-cee35791b57a";

//	코드에프 가입을 통해 발급 받은 RSA 공개키 정보
const PUBLIC_KEY =
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiBiV4ZXTvTRXSWnlQLm/x9Yp2+754DmLsEozXkQp47KrlqKbnVz+4/sZAur2YHSAsXRl+J4O4EoMl86zY7lFclzWfmABaI0rnCUesmn6yq6RzHv8Fo++hFgXQKHBmkC3p4l18A96oRl8ZhM6HnYipGilloPz1TJF0t6WGWTn0PaRYE4ebU+8x9fUhTMyv/Uqs/FZiKKi2+d3km4Adk54lv63KfEhoZwEwwF7ihPiCJ/VKY7SDGndJOVZCFXaEqmUJMRRQKOxd4+SDk9U7uQ9Cb8cQY/iEIjGQO1OTERX9cGYYENCnWC+iwYiBWj/UUR1xLyG+YN022uPUZPksZCBdQIDAQAB";

/*
 *#1.쉬운 코드에프 객체 생성
 */
const codef = new EasyCodef();

/*
 *#2.RSA암호화를 위한 퍼블릭키 설정
 * - 데모/정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 암호화가 필요한 필드에 사용 - encryptValue(String plainText);
 */
codef.setPublicKey(PUBLIC_KEY);

/*
 *#3.데모 클라이언트 정보 설정
 * - 데모 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 데모 서비스로 상품 조회 요청시 필수 입력 항목
 */
codef.setClientInfoForDemo(DEMO_CLIENT_ID, DEMO_CLIENT_SECRET);

/*
 * #4.정식 클라이언트 정보 설정
 * - 정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 정식 서비스로 상품 조회 요청시 필수 입력 항목
 */
codef.setClientInfo(CLIENT_ID, CLIENT_SECRET);

/*#5.요청
 *  - 샌드박스 : EasyCodefConstant.SERVICE_TYPE_SANDBOX
 *  - 데모 : EasyCodefConstant.SERVICE_TYPE_DEMO
 *  - 운영 : EasyCodefConstant.SERVICE_TYPE_API
 */
codef
  .requestToken(EasyCodefConstant.SERVICE_TYPE_DEMO)
  .then(function (response) {
    /*
     * #6. 토큰 발급 결과
     */
    console.log(response);
  });

app.post("/result", (req, res) => {
  const param = req.body;

  /* #6.코드에프 정보 조회 요청 - 서비스타입(API:정식, DEMO:데모, SANDBOX:샌드박스) */
  const productUrl = "/v1/kr/public/pp/nhis-health-checkup/result"; //
  codef
    .requestProduct(productUrl, EasyCodefConstant.SERVICE_TYPE_DEMO, param)
    .then(function (response) {
      // #7. 응답 결과
      res.send(response);
    });
});

app.post("/information", (req, res) => {
  const param = req.body;

  /* #6.코드에프 정보 조회 요청 - 서비스타입(API:정식, DEMO:데모, SANDBOX:샌드박스) */
  const productUrl = "/v1/kr/public/pp/nhis-treatment/information"; //
  codef
    .requestProduct(productUrl, EasyCodefConstant.SERVICE_TYPE_DEMO, param)
    .then(function (response) {
      // #7. 응답 결과
      res.send(response);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
