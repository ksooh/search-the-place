
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };  

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

//, iwContent: '<a href="" style="color:blue" target="_blank">교육신청</a>'

var positions = [
  //1권역
  //마포구
  {
    title: "마포평생학습관 아현분관",
    address: "서울특별시 마포대로 224",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000910" style="color:blue" target="_blank">교육신청</a>',
    iwContent: '<a href="" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "우리마포복지관(4층)",
    address: "서울특별시 마포구 신촌로26길 10",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000106" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "시립마포노인종합복지관(4층)",
    address: "서울특별시 마포구 서강로68",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000089" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "아현 배움터교육장(3층)",
    address: "서울특별시 마포대로11길 44-81",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002133" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "마포구청 배움터교육장<br>(지하1층)",
    address: "서울특별시 월드컵로212",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002134" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "성산1동주민센터(4층)",
    address: "서울특별시 마포구 성산로4길 15",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000088" style="color:blue" target="_blank">교육신청</a>'
  },

  //서대문구
  {
    title: "홍은1동 자치회관",
    address: "서울특별시 서대문구 세검정로1길45",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000096" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "서대문구 노인종합복지관",
    address: "서울특별시 서대문구 독립문로8길 57",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001094" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "서대문구 노인지회(유진상가 2층)",
    address: "서울특별시서대문구 통일로 484",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000938" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "서대문구평생학습관<br>융복합인재교육센터",
    address: "서울특별시 서대문구 연희로36길 49",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000098" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "천연동자치회관(4층)",
    address: "서울특별시 서대문구 독립문로 15-7",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000064" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "북아현동 자치회관(302호)",
    address: "서울특별시 서대문구 북아현로 24",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002136" style="color:blue" target="_blank">교육신청</a>'
  },

  //은평구
  {
    title: "은평문화예술회관<br>(지하1층 컴퓨터실)",
    address: "서울 은평구 녹번로 16",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000193" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "구립갈현노인복지관",
    address: "서울특별시 은평구 증산서길 89",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002143" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "*은평구립도서관",
    address: "서울특별시 은평구 통일로 78가길 13-84",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000195" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "구립증산정보도서관",
    address: "서울특별시 은평구 증산로 5길 6",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000197" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "응암정보도서관<br>(2~3층)",
    address: "서울특별시 은평구 가좌로 179",
    iwContent:
      '<iwContent: href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000198" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "*녹번e편한세상캐슬",
    address: "서울시 은평구 은평로 220",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002140" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "구립역촌노인복지관",
    address: "서울특별시 은평구 연서로3나길 11-30",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001111" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "*증산동주민센터",
    address: "서울특별시 은평구 통일로89길 12-6",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001112" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "구립응암노인복지관",
    address: "서울특별시 은평구 응암로21가길 5-1",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000932" style="color:blue" target="_blank">교육신청</a>'
  },
  {
    title: "구립불광노인복지관",
    address: "서울특별시 은평구 연서로32길 17-11",
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002144" style="color:blue" target="_blank">교육신청</a>'
  },

  //종로구
  {
    title: "종로노인종합 사회복지관<br>(3층)",
    address: "서울특별시 종로구 율곡로19길 17-8"
  },
  {
    title: "종로노인종합 사회복지관 무악센터",
    address: "서울특별시 종로구 통일로14길 30"
  },
  {
    title: "종로장애인복지관<br>(3층)",
    address: "서울특별시 종로구 자하문로89 세종마을 푸르메센터"
  },
  {
    title: "서울노인복지센터<br>(2층 컴퓨터교실)",
    address: "서울특별시 종로구 삼일대로 467"
  },
  {
    title: "종로장애인가족지원센터<br>(교육장:2층)",
    address: "서울특별시 종로구 삼청로 91-1"
  },

  //중구
  { title: "중림종합사회복지관", address: "서울특별시 중구 서소문로6길 16" },
  {
    title: "신당누리센터 누리도서관<br>(1층 교육실)",
    address: "서울특별시 중구 다산로33길 3"
  },
  {
    title: "유락종합사회복지관<br>(6층)",
    address: "서울특별시 중구 퇴계로 460"
  },
  {
    title: "한국여성생활연구원<br>(가톨릭회관 522호)",
    address: "서울특별시 중구 명동길 80"
  },
  {
    title: "서울시민청 스마트서울전시관<br>(지하1층)",
    address: "서울특별시 중구 세종대로 110"
  },

  //2권역
  //강북구
  {
    title: "한국복지정보통신협의회(강북)<br>(KT미아빌딩 별관2동 제1강의실)",
    address: "서울특별시 강북구 솔매로50길 43"
  },
  {
    title: "구세군 강북종합사회복지관",
    address: "서울시 강북구 인수봉로 20가길 24"
  },
  {
    title: "번동2단지 종합사회 복지관",
    address: "서울특별시 강북구 한천로105길 24"
  },
  {
    title: "시립강북노인종합복지관",
    address: "서울특별시 강북구 삼양로 92길 40"
  },
  { title: "강북보훈회관", address: "서울특별시 강북구 미아동 198-55" },

  //노원구
  {
    title: "상계종합사회복지관",
    address: "서울특별시 노원구 덕릉로115나길 25"
  },
  { title: "마들종합사회복지관", address: "서울특별시 노원구 중계2.3동 515-3" },
  {
    title:
      "노원구 평생교육원 장미실습장<br>(6단지 종합상가내지하1층장미실습장)",
    address: "서울특별시 노원구 섬밭로196"
  },
  { title: "공릉종합사회복지관", address: "서울특별시 노원구 동일로 1127" },
  { title: "청백3단지경로당", address: "서울특별시 노원구 월계로45가길 89" },
  {
    title: "도암어울마루",
    address: "서울특별시 노원구 덕릉로126나길 14(상계동)"
  },

  //도봉구
  {
    title: "시립도봉노인종합복지관",
    address: "서울특별시 도봉구 도당로2길 12-13"
  },
  {
    title: "청학경로당",
    address: "서울특별시 도봉구 도당로13라길 104-4 (방학동)"
  },
  {
    title: "창동주공19단지A 경로당<br>(1층)",
    address: "서울특별시 도봉구 노해로70길 54"
  },
  { title: "창동아우르네", address: "서울특별시 도봉구 노해로 70길 54" },
  { title: "도봉이숨터", address: "서울특별시 도봉구 마들로13길 84" },
  {
    title: "도봉동어르신복지관<br>(4층컴퓨터실)",
    address: "서울특별시 도봉구 도봉로169가길 52"
  },

  //동대문구
  {
    title: "휘경주민센터<br>(3층)",
    address: "서울특별시 동대문구 외대역동로6길 3"
  },
  {
    title: "동대문노인종합복지관",
    address: "서울특별시 동대문구 제기로33길 25"
  },
  {
    title: "구립동대문장애인종합복지관<br>(다사랑행복센터 2층)",
    address: "서울특별시 동대문구 청계천로 521"
  },
  {
    title: "서울발달장애인훈련센터",
    address: "서울특별시 동대문구 왕산로23길 55"
  },
  {
    title: "동대문더퍼스트데시앙A경로당",
    address: "서울특별시 동대문구 장안동 587"
  },

  //3권역
  //강동구
  {
    title:
      "서울시민대학 동남권캠퍼스<br>(4층 교육장 (소프트웨어3실 & 스마트강의실))",
    address: "서울특별시 강동구 고덕로 399"
  },
  {
    title: "강동마을미디어지원센터<br>(6층)",
    address: "서울특별시 강동구 올림픽로 752"
  },
  {
    title: "강일동 스마트복지센터<br>(푸르내 102동 302호)",
    address: "서울 강동구 상일로 12길 95"
  },
  {
    title: "시립강동노인종합복지관<br>(1층)",
    address: "서울특별시 강동구 동남로71길 32-5"
  },
  {
    title: "강동구립해공도서관<br>(3층)",
    address: "서울특별시 강동구 올림픽로 702"
  },
  {
    title: "성내종합사회복지관<br>(4층)",
    address: "서울특별시 강동구 성안로 13길 56"
  },
  {
    title: "강동 또바기작은도서관<br>(관리동 2층)",
    address: "서울 강동구 아리수로98길 25"
  },
  {
    title: "고덕3단지 SH작은도서관<br>(고덕리엔파크3단지아파트 315동 1층)",
    address: "서울 강동구 상일로 74"
  },

  //광진구
  {
    title: "시립광진노인종합복지관<br>(3층 교육실) ",
    address: "서울특별시 광진구 군자로88"
  },
  {
    title: "광진정보도서관<br>(2층 교육실)",
    address: "서울특별시 광진구 아차산로78길 90"
  },
  {
    title: "자양종합사회복지관<br>(4층 컴퓨터실)",
    address: "서울 광진구 자양번영로 35"
  },
  {
    title: "자양한강도서관<br>(3층 컴퓨터실)",
    address: "서울특별시 광진구 뚝섬로52길 66"
  },
  {
    title: "중곡문화체육센터 도서관<br>(3층 소강의실)",
    address: "서울특별시 광진구 능동로 433"
  },

  //성동구
  {
    title: "성동노인종합복지관(2층 컴퓨터실)",
    address: "서울특별시 성동구 마조로 77"
  },
  { title: "옥수종합사회복지관", address: "서울 성동구 한림말길 16-5" },
  {
    title: "성동구립금호도서관<br>(4층 교육실)",
    address: "서울특별시 성동구 난계로 20"
  },
  {
    title: "성동구립 사근동노인복지센터<br>(2층 교육실)",
    address: "서울특별시 성동구 사근동길 37"
  },
  {
    title: "성동장애인종합복지관<br>(2층 교육실)",
    address: "서울특별시 성동구 청계천로 506"
  },
  {
    title: "성동구청 5층 배움터교육장<br>(5층 정보화교육장)",
    address: "서울특별시 성동구 고산자로 270"
  },
  {
    title:
      "왕십리 도선동 주민센터3층 배움터교육장<br>(노인복지관 공공복합청사 3층)",
    address: "서울특별시 성동구 마장로 141"
  },

  //용산구
  {
    title: "갈월종합사회복지관<br>(3층)",
    address: "서울특별시 용산구 두텁바위로 25"
  },
  {
    title: "효창종합사회복지관<br>(2층)",
    address: "서울특별시 용산구 효창원로 146-12"
  },
  {
    title: "청파노인복지관<br>(4층)",
    address: "서울특별시 용산구 청파로83길 26"
  },
  {
    title: "참나무 배움터<br>(용산제일교회내 참나무방과후교실 1층)",
    address: "서울 용산구 새창로12길 11-18"
  },
  { title: "시립용산노인종합복지관", address: "서울 용산구 독서당로11길 16" },
  {
    title: "용산시각장애인연합회<br>(3층 시각장애인협회 정보화교육장)",
    address: "서울 용산구 서빙고로 245"
  },

  //중랑구
  { title: "구립용마경로복지센터", address: "서울 중랑구 용마산로94길 98" },
  { title: "시립중랑노인종합복지관", address: "서울 중랑구 겸재로9길 45" },
  {
    title: "신내2동 동주민센터 IT융합교육장<br>(관상복합청사지하1층)",
    address: "서울특별시 중랑구 봉화산로 190"
  },
  { title: "중랑상봉도서관<br>(3~5층)", address: "서울 중랑구 동일로114길 10" },
  { title: "구립신내노인종합복지관", address: "서울 중랑구 신내로15길 175" },
  {
    title: "신내경로복지센터<br>(3층 정보검색실)",
    address: "서울특별시 중랑구 망우로65길 20"
  },

  //4권역
  //관악구
  { title: "강감찬관악종합사회복지관", address: "서울특별시 관악구 양녕로 74" },
  {
    title: "관악구장애인종합복지관",
    address: "서울특별시 관악구 남부순환로 1914"
  },
  {
    title: "미디어센터 관악<br>(6층)",
    address: "서울특별시 관악구 남부순환로 1491"
  },
  { title: "성현동주민센터(정보화교육장)", address: "서울시 관악구 구암길 38" },
  {
    title: "난곡마을 협동조합 정보실",
    address: "서울특별시 관악구 난곡로24가길 53"
  },
  { title: "관악삼성동주민자치회관", address: "서울특별시 관악구 호암로 520" },

  //동작구
  {
    title: "사당어르신종합복지관",
    address: "서울특별시 동작구 남부순환로 2081"
  },
  {
    title: "흑석동 주민센터<br>(2층)",
    address: "서울특별시 동작구 흑석한강로 11"
  },
  {
    title: "시립동작노인종합복지관<br>(지하1층)",
    address: "서울특별시 동작구 상도로 11길 7"
  },
  {
    title: "시립발달장애인복지관<br>(2층 207호)",
    address: "서울특별시 동작구 여의대방로20나길 39"
  },
  {
    title: "유한양행 교육장<br>(9층 전산교육장)",
    address: "서울특별시 동작구 노량진로74"
  },
  {
    title: "사당4동 도시재생현장지원센터",
    address: "서울특별시 동작구 사당로14길 66"
  },
  {
    title: "동작구장애인가족지원센터<br>(5층)",
    address: "서울특별시 동작구 보라매로5가길 16"
  },

  //서초구
  {
    title: "서초여성가족플라자 서초센터<br>(5층)",
    address: "서울특별시 서초구 서운로26길 3"
  },
  { title: "서초구보훈회관", address: "서울특별시 서초구 방배로27길 13" },
  {
    title: "서초IT배움센터<br>(양재역 환승주차장 5층)",
    address: "서울특별시 서초구 강남대로221"
  },
  {
    title: "서초구립방배2동제2경로당",
    address: "서울특별시 서초구 방배천로16길 5"
  },
  {
    title: "서초구립양재종합사회복지관",
    address: "서울 서초구 남부순환로 2610"
  },

  //송파구
  {
    title: "올림픽수영장 문화센터<br>(2층)",
    address: "서울특별시 서초구 서초대로59"
  },
  {
    title: "마천종합사회복지관<br>(3층 교육장)",
    address: "서울특별시 송파구 마천로 65길 4"
  },
  { title: "송파복지센터<br>(2층)", address: "서울특별시 송파구 충민로 184" },
  {
    title: "송파종합사회복지관<br>(2층)",
    address: "서울특별시 송파구 오금로51길 34"
  },
  {
    title: "송파실벗뜨락<br>(6층)",
    address: "서울특별시 송파구 백제고분로 42길 5"
  },
  {
    title: "헬리오시티APT경로당<br>(1~5단지 경로당)",
    address: "서울특별시 송파구 송파대로 345"
  },

  //강남구
  {
    title: "강남노인종합복지관<br>(4층)",
    address: "서울특별시 강남구 삼성로 628"
  },

  //5권역
  //강서구
  { title: "염창지역정보센터", address: "서울특별시 강서구 공항대로 61길 50" },
  {
    title: "강서구립곰달래어르신복지센터<br>(3층)",
    address: "서울특별시 강서구 강서로 5길 50"
  },
  {
    title: "강서구립봉제산어르신복지센터<br>(강서구보건소 화곡분소 3층)",
    address: "서울특별시 강서구 초록마을로 15길 12"
  },
  {
    title: "강서구립화곡어르신복지센터",
    address: "서울특별시 강서구 월정로30길 96"
  },
  { title: "강서노인종합복지관", address: "서울특별시 강서구 화곡로 61길 85" },
  {
    title: "에코미래학습코칭센터<br>(SB타워 511호)",
    address: "서울특별시 강서구 마곡서로56"
  },
  {
    title: "장애여성 인력개발센터<br>(귀뚜라미홈시스텔 2층)",
    address: "서울특별시 강서구 화곡로 346"
  },

  //구로구
  { title: "스마트구로홍보관", address: "서울특별시 구로구 새말로 117-21" },
  {
    title: "메리워드지역아동센터<br>(동부골드아파트210동 관리동3층)",
    address: "서울특별시 구로구 고척로49 "
  },
  { title: "성베드로학교", address: "서울특별시 구로구 연동로 320" },
  {
    title: "구로파랑새지역아동센터<br>(3층)",
    address: "서울특별시 구로구 구로동로 38길 32"
  },
  {
    title: "꿈나래지역아동센터<br>(3층)",
    address: "서울특별시 구로구 고척로6길 29"
  },
  { title: "함사람지역아동센터", address: "서울특별시 구로구 경서로 82-14" },
  {
    title: "우신지역아동센터<br>(우신상가 304호 궁동)",
    address: "서울특별시 구로구 오리로 1265"
  },
  { title: "구로노인종합복지관", address: "서울특별시 구로구 새말로 16길 7" },

  //금천구
  { title: "금천 구청 교육장", address: "서울특별시 금천구 시흥대로 73길 70" },
  { title: "독산2동주민센터<br>(3층)", address: "서울특별시 금천구 독산로179" },
  { title: "롯데1차 경로당", address: "서울특별시 금천구 벚꽃로 40" },
  { title: "구립시흥노인교실", address: "서울특별시 금천구 금하로 23다길 8" },
  { title: "금천어르신복지센터", address: "서울특별시 금천구 독산동 293-14" },
  {
    title: "금천노인종합복지관",
    address: "서울특별시 금천구 시흥대로 51길 93-32"
  },

  //양천구
  { title: "양천어르신종합복지관", address: "서울특별시 양천구 목동로3길 106" },
  { title: "신목종합사회복지관", address: "서울특별시 양천구 신목로 5" },
  { title: "목동어르신복지관", address: "서울특별시 양천구 목동중앙로 3길 21" },
  {
    title: "양천구50플러스센터<br>(행정복합타운 4층)",
    address: "서울특별시 양천구 남부순환로 83길 53"
  },
  {
    title: "서서울어르신복지관",
    address: "서울특별시 양천구 가로공원로 60가길 16"
  },
  { title: "행복둥지 작은도서관", address: "서울특별시 양천구 신월로24길 8" },
  { title: "신월4동주민센터", address: "서울특별시 양천구 오목로5길34" },

  //영등포구
  {
    title: "여의도어르신복지센터<br>(2층)",
    address: "서울특별시 영등포구 여의대방로 372"
  },
  {
    title: "영등포어르신복지센터",
    address: "서울특별시 영등포구 도영로22길 36"
  },
  {
    title: "시니어행복발전센터<br>(대림1동 보건소분소 2층)",
    address: "서울특별시 영등포구 디지털로 441"
  },
  { title: "모랫말어르신복지센터", address: "서울특별시 영등포구 도영로 41" },
  {
    title: "영등포동자치회관<br>(2층)",
    address: "서울특별시 영등포구 국회대로 44길 4"
  },
  {
    title: "양평2동 주민센터<br>(양평2동 주민센터 4층 프로그램실)",
    address: "서울특별시 영등포구 선유로47길 30"
  }
];

positions.forEach(function (position) {
  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(position.address, function (result, status) {
    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      // 결과값으로 받은 위치를 마커로 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: coords
      });
      // 인포윈도우로 장소에 대한 설명을 표시합니다
      //변경한 코드
      var infowindow = new kakao.maps.InfoWindow({
        content:
          '<div style="text-align:center;padding:10px; ">' +
          position.title +
          "</div>"
      });

      infowindow.open(map, marker);
    }
  });
});


const Searching = Search.prototype;

function Search() {
  this.keyword = document.querySelector('input[name="search"]');
  //input태그를 name인 search를 통해 불러와 keyword변수에 저장해준다.
  this.engine = document.querySelector(".SelectSearch");
  this.button = document.querySelector(".img-button");
  this.form = document.querySelector(".search");

  this.Word();
}

// 마커 이미지의 이미지 주소입니다
var imageSrc =  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";


//입력된 주소 화면에 마커 표시하기
Searching.Word = function () {
  this.form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let keyword = this.keyword.value;
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(); 

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(keyword, placesSearchCB); 

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB (data, status, pagination)  {
      if (status === kakao.maps.services.Status.OK) {

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          var bounds = new kakao.maps.LatLngBounds();
          // data.length
          for (var i=0; i<1; i++) {
              displayMarker(data[i]);    
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }       

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
      } 
    }
    
    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(30, 44);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage // 마커 이미지
      });
      
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }

    geocoder.addressSearch(keyword, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(30, 44);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: coords, // 마커를 표시할 위치
          image: markerImage // 마커 이미지
        });
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  });
};

new Search();
