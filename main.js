var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };  

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var mapTypeControl=new daum.maps.MapTypeControl();
var zoomControl=new daum.maps.ZoomControl();
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);


// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();


var test= '@Model["RoadAddr"]@Model["RoadAddrSub"]';
console.log(test)

var positions = [
  
  //1권역
  //마포구
  { title: '마포평생학습관 아현분관', address: '서울특별시 마포대로 224', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000910" style="color:blue" target="_blank">교육신청</a>', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000910" style="color:blue" target="_blank">교육신청</a>'},
  { title: '우리마포복지관', address: '서울특별시 마포구 신촌로26길 10', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000106" style="color:blue" target="_blank">교육신청</a>' },
  { title: '시립마포노인종합복지관', address: '서울특별시 마포구 서강로68', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000089" style="color:blue" target="_blank">교육신청</a>' },
  { title: '아현 배움터교육장', address: '서울특별시 마포대로11길 44-81', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002133" style="color:blue" target="_blank">교육신청</a>' },
  { title: '마포구청 배움터교육장', address: '서울특별시 월드컵로212', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002134" style="color:blue" target="_blank">교육신청</a>' },
  { title: '성산1동주민센터', address: '서울특별시 마포구 성산로4길 15', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000088" style="color:blue" target="_blank">교육신청</a>' },
  
  //서대문구
  { title: '홍은1동 자치회관', address: '서울특별시 서대문구 세검정로1길45', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000096" style="color:blue" target="_blank">교육신청</a>' },
  { title: '서대문구 노인종합복지관', address: '서울특별시 서대문구 독립문로8길 57', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001094" style="color:blue" target="_blank">교육신청</a>' },
  { title: '서대문구 노인지회', address: '서울특별시서대문구 통일로 484', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000938" style="color:blue" target="_blank">교육신청</a>' },
  { title: '서대문구평생학습관 융복합인재교육센터', address: '서울특별시 서대문구 연희로36길 49', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000098" style="color:blue" target="_blank">교육신청</a>' },
  { title: '천연동자치회관', address: '서울특별시 서대문구 독립문로 15-7', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000064" style="color:blue" target="_blank">교육신청</a>' },
  { title: '북아현동 자치회관', address: '서울특별시 서대문구 북아현로 24', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002136" style="color:blue" target="_blank">교육신청</a>' },
  
  //은평구
  { title: '은평문화예술회관', address: '서울 은평구 녹번로 16', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000193" style="color:blue" target="_blank">교육신청</a>' },
  { title: '구립갈현노인복지관', address: '서울특별시 은평구 증산서길 89', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002143" style="color:blue" target="_blank">교육신청</a>' },
  { title: '*은평구립도서관', address: '서울특별시 은평구 통일로 78가길 13-84', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000195" style="color:blue" target="_blank">교육신청</a>' },
  { title: '구립증산정보도서관', address: '서울특별시 은평구 증산로 5길 6', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000197" style="color:blue" target="_blank">교육신청</a>' },
  { title: '응암정보도서관', address: '서울특별시 은평구 가좌로 179', iwContent: '<iwContent: href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000198" style="color:blue" target="_blank">교육신청</a>' },
  { title: '*녹번e편한세상캐슬', address: '서울시 은평구 은평로 220', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002140" style="color:blue" target="_blank">교육신청</a>' },
  { title: '구립역촌노인복지관', address: '서울특별시 은평구 연서로3나길 11-30', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001111" style="color:blue" target="_blank">교육신청</a>' },
  { title: '*증산동주민센터', address: '서울특별시 은평구 통일로89길 12-6', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001112" style="color:blue" target="_blank">교육신청</a>' },
  { title: '구립응암노인복지관', address: '서울특별시 은평구 응암로21가길 5-1', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000932" style="color:blue" target="_blank">교육신청</a>' },
  { title: '구립불광노인복지관', address: '서울특별시 은평구 연서로32길 17-11', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002144" style="color:blue" target="_blank">교육신청</a>' },
  
  //종로구
  { title: '종로노인종합 사회복지관', address: '서울특별시 종로구 율곡로19길 17-8',iwContent:'<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000206" style="color:blue" target="_blank">교육신청</a>' },
  { title: '종로노인종합 사회복지관 무악센터', address: '서울특별시 종로구 통일로14길 30' ,iwContent:'<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/place.do?sch_area_cd=101&sch_signgu_cd=10123&sch_oper_sttus_se_cd=&sch_edc_plc_se_cd=&sch_edc_place_nm=" style="color:red" target="_blank">교육신청</a>'},
  { title: '종로장애인복지관', address: '서울특별시 종로구 자하문로89 세종마을 푸르메센터' ,iwContent:'<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000206" style="color:blue" target="_blank">교육신청</a>'},
  { title: '서울노인복지센터', address: '서울특별시 종로구 삼일대로 467' ,iwContent:'<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000205" style="color:blue" target="_blank">교육신청</a>'},
  { title: '종로장애인가족지원센터', address: '서울특별시 종로구 삼청로 91-1' , iwContent:'<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001113" style="color:blue" target="_blank">교육신청</a>'},
    
  //중구
  { title: '중림종합사회복지관', address: '서울특별시 중구 서소문로6길 16' ,iwContent:'<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001336" style="color:blue" target="_blank">교육신청</a>'},
  { title: '신당누리센터 누리도서관', address: '서울특별시 중구 다산로33길 3',iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001336" style="color:blue" target="_blank">교육신청</a>' },
  { title: '유락종합사회복지관', address: '서울특별시 중구 퇴계로 460' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000652" style="color:blue" target="_blank">교육신청</a>'},
  { title: '한국여성생활연구원', address: '서울특별시 중구 명동길 80' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000215" style="color:blue" target="_blank">교육신청</a>'},
  { title: '서울시민청 스마트서울전시관', address: '서울특별시 중구 세종대로 110' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr//edc/crse/plcdtl.do?&sch_edc_place_id=20210001127" style="color:blue" target="_blank">교육신청</a>'},


	
  //2권역
  //강북구
  { title: '솔샘문화정보도서관', address: '서울특별시 강북구 솔샘로 177',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000016" style="color:blue" target="_blank">교육신청</a>'
 },
 { title: '한국복지정보통신협의회', address: '서울특별시 강북구 솔매로50길 43',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000654" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '구세군 강북종합사회복지관', address: '서울시 강북구 인수봉로 20가길 24' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001123" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '번동2단지 종합사회 복지관', address: '서울특별시 강북구 한천로105길 24',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001122" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '시립강북노인종합복지관', address: '서울특별시 강북구 삼양로 92길 40' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000018" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '강북보훈회관', address: '서울특별시 강북구 미아동 198-55',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001621" style="color:blue" target="_blank">교육신청</a>'
 },
    
  //노원구
  { title: '상계종합사회복지관', address: '서울특별시 노원구 덕릉로115나길 25',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000913" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '마들종합사회복지관', address: '서울특별시 노원구 중계2.3동 515-3',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001124" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '장미실습장', address: '서울특별시 노원구 섬밭로196',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000072" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '공릉종합사회복지관', address: '서울특별시 노원구 동일로 1127',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001084" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '청백3단지경로당', address: '서울특별시 노원구 월계로45가길 89' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002364" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '도암어울마루', address: '서울특별시 노원구 덕릉로126나길 14(상계동)',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002223" style="color:blue" target="_blank">교육신청</a>'
 },

  //도봉구
  { title: '시립도봉노인종합복지관', address: '서울특별시 도봉구 도당로2길 12-13' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000074" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '청학경로당', address: '서울특별시 도봉구 도당로13라길 104-4 (방학동)',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001089" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '창동주공19단지A 경로당', address: '서울특별시 도봉구 노해로70길 54',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001088" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '창동아우르네', address: '서울특별시 도봉구 마들로13길 84',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000565" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '도봉이숨터', address: '서울특별시 도봉구 도봉로170길 2',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002123" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '도봉동어르신복지관', address: '서울특별시 도봉구 도봉로169가길 52' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002248" style="color:blue" target="_blank">교육신청</a>'
},

  //동대문구
  { title: '휘경주민센터', address: '서울특별시 동대문구 외대역동로6길 3',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000076" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '동대문노인종합복지관', address: '서울특별시 동대문구 제기로33길 25',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000077" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '구립동대문장애인종합복지관', address: '서울특별시 동대문구 청계천로 521',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001090" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '서울발달장애인훈련센터', address: '서울특별시 동대문구 왕산로23길 55' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002311" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '동대문더퍼스트데시앙A경로당', address: '서울특별시 동대문구 장안동 587',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002516" style="color:blue" target="_blank">교육신청</a>'
 },
  	
//성북구
{ title: '시립성북노인종합복지관', address: '서울시 성북구 종암로15길 10',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000146" style="color:blue" target="_blank">교육신청</a>'
 },
 
 { title: '상월곡실버복지센터	', address: '서울특별시 노원구 동일로 1127',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000911" style="color:blue" target="_blank">교육신청</a>'
 },

{ title: '석관실버복지센터', address: '서울특별시 성북구 화랑로32길 88',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000882" style="color:blue" target="_blank">교육신청</a>'
 },

{ title: '성북장애인단체연합회', address: '서울특별시 성북구 오패산로3길 95',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000813" style="color:blue" target="_blank">교육신청</a>'
 },

{ title: '장위실버복지센터', address: '서울특별시 성북구 한천로 708',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000085" style="color:blue" target="_blank">교육신청</a>'
 },


	
  //3권역
  //강동구
  { title: '서울시민대학 동남권캠퍼스', address: '서울특별시 강동구 고덕로 399',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001574" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '강동마을미디어지원센터', address: '서울특별시 강동구 올림픽로 752' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002391" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '강일동 스마트복지센터', address: '서울 강동구 상일로 12길 95',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/place.do?sch_area_cd=101&sch_signgu_cd=10102&sch_oper_sttus_se_cd=&sch_edc_plc_se_cd=&sch_edc_place_nm=" style="color:red" target="_blank">교육신청</a>'
 },
  { title: '시립강동노인종합복지관', address: '서울특별시 강동구 동남로71길 32-5' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000010" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '강동구립해공도서관', address: '서울특별시 강동구 올림픽로 702',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000071" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '성내종합사회복지관', address: '서울특별시 강동구 성안로 13길 56',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000909" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '강동 또바기작은도서관', address: '서울 강동구 아리수로98길 25' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002303" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '고덕3단지 SH작은도서관', address: '서울 강동구 상일로 74',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002302" style="color:blue" target="_blank">교육신청</a>'
 },

  //광진구
  { title: '시립광진노인종합복지관', address: '서울특별시 광진구 군자로88' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000044" style="color:blue" target="_blank">교육신청</a>'
},
{ title: '광진 이튼타워 경로당', address: '서울특별시 광진구 능동로 18' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002214" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '광진정보도서관', address: '서울특별시 광진구 아차산로78길 90',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000075" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '자양종합사회복지관', address: '서울 광진구 자양번영로 35',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001083" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '자양한강도서관', address: '서울특별시 광진구 뚝섬로52길 66' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000084" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '중곡문화체육센터 도서관', address: '서울특별시 광진구 능동로 433',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000087" style="color:blue" target="_blank">교육신청</a>'
 },

  //성동구
  { title: '성동노인종합복지관', address: '서울특별시 성동구 마조로 77' ,
    iwContent:
      '<a href=" https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000114" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '옥수종합사회복지관', address: '서울 성동구 한림말길 16-5',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002286" style="color:blue" target="_blank">교육신청</a>' },
  { title: '성동구립금호도서관', address: '서울특별시 성동구 난계로 20',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000112" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '성동구립 사근동노인복지센터', address: '서울특별시 성동구 사근동길 37',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001102" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '성동장애인종합복지관', address: '서울특별시 성동구 청계천로 506',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001125" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '성동구청 5층 배움터교육장', address: '서울특별시 성동구 고산자로 270',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002124" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '왕십리 도선동 주민센터3층', address: '서울특별시 성동구 마장로 141',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000113" style="color:blue" target="_blank">교육신청</a>'
 },

  //용산구
  { title: '갈월종합사회복지관', address: '서울특별시 용산구 두텁바위로 25',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000186" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '효창종합사회복지관', address: '서울특별시 용산구 효창원로 146-12',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000184" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '청파노인복지관', address: '서울특별시 용산구 청파로83길 26',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002120" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '참나무 배움터', address: '서울 용산구 새창로12길 11-18',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002324" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '시립용산노인종합복지관', address: '서울 용산구 독서당로11길 16' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000183" style="color:blue" target="_blank">교육신청</a>'},
  { title: '용산시각장애인연합회', address: '서울 용산구 서빙고로 245',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002180" style="color:blue" target="_blank">교육신청</a>'
 },

  //중랑구
  { title: '구립용마경로복지센터', address: '서울 중랑구 용마산로94길 98',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000221" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '시립중랑노인종합복지관', address: '서울 중랑구 겸재로9길 45',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000219" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '신내2동 동주민센터 IT융합교육장', address: '서울특별시 중랑구 봉화산로 190',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000216" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '중랑상봉도서관', address: '서울 중랑구 동일로114길 10',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002335" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '구립신내노인종합복지관', address: '서울 중랑구 신내로15길 175' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000218" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '신내경로복지센터', address: '서울특별시 중랑구 망우로65길 20',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000217" style="color:blue" target="_blank">교육신청</a>'
 },


	
  //4권역
  //관악구
  { title: '강감찬관악종합사회복지관', address: '서울특별시 관악구 양녕로 74',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000036" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '관악구장애인종합복지관', address: '서울특별시 관악구 남부순환로 1914',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001080" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '미디어센터 관악', address: '서울특별시 관악구 남부순환로 1491',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002100" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '성현동주민센터', address: '서울시 관악구 구암길 38' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000032" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '난곡마을 협동조합 정보실', address: '서울특별시 관악구 난곡로24가길 53' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002323" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '관악삼성동주민자치회관', address: '서울특별시 관악구 호암로 520' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002395" style="color:blue" target="_blank">교육신청</a>'
},

  //동작구
  { title: '사당어르신종합복지관', address: '서울특별시 동작구 남부순환로 2081' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002059" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '흑석동 주민센터', address: '서울특별시 동작구 흑석한강로 11' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000086" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '시립동작노인종합복지관', address: '서울특별시 동작구 상도로 11길 7',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000084" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '시립발달장애인복지관', address: '서울특별시 동작구 여의대방로20나길 39',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001093" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '유한양행 교육장', address: '서울특별시 동작구 노량진로74',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000083" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '사당4동 도시재생현장지원센터', address: '서울특별시 동작구 사당로14길 66',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002184" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '동작구장애인가족지원센터', address: '서울특별시 동작구 보라매로5가길 16' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001092" style="color:blue" target="_blank">교육신청</a>'
},

  //서초구
  { title: '서초여성가족플라자 서초센터', address: '서울특별시 서초구 서운로26길 3' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000123" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '서초구보훈회관', address: '서울특별시 서초구 방배로27길 13',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002216" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '서초IT배움센터', address: '서울특별시 서초구 강남대로221',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002215" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '서초구립방배2동제2경로당', address: '서울특별시 서초구 방배천로16길 5',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002393" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '서초구립양재종합사회복지관', address: '서울 서초구 남부순환로 2610',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002372" style="color:blue" target="_blank">교육신청</a>'
 },

  //송파구
  { title: '올림픽수영장 문화센터', address: '서울특별시 서초구 서초대로59',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002336" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '마천종합사회복지관', address: '서울특별시 송파구 마천로 65길 4' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001106" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '송파복지센터', address: '서울특별시 송파구 충민로 184' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001107" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '송파종합사회복지관', address: '서울특별시 송파구 오금로51길 34' ,
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002126" style="color:blue" target="_blank">교육신청</a>'
},
  { title: '송파실벗뜨락', address: '서울특별시 송파구 백제고분로 42길 5',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002148" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '헬리오시티APT경로당', address: '서울특별시 송파구 송파대로 345',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002150" style="color:blue" target="_blank">교육신청</a>'
 },

  //강남구
  { title: '강남노인종합복지관', address: '서울특별시 강남구 삼성로 628',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001070" style="color:blue" target="_blank">교육신청</a>'
 },


	
  //5권역
  //강서구
  { title: '염창지역정보센터', address: '서울특별시 강서구 공항대로 61길 50',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000025" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '강서구립곰달래어르신복지센터', address: '서울특별시 강서구 강서로 5길 50',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000026" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '강서구립봉제산어르신복지센터', address: '서울특별시 강서구 초록마을로 15길 12',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000827" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '강서구립화곡어르신복지센터', address: '서울특별시 강서구 월정로30길 96',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002137" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '강서노인종합복지관', address: '서울특별시 강서구 화곡로 61길 85',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000027" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '에코미래학습코칭센터', address: '서울특별시 강서구 마곡서로56',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002318" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '장애여성 인력개발센터', address: '서울특별시 강서구 화곡로 346',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000691" style="color:blue" target="_blank">교육신청</a>'
 },
    
  //구로구
  { title: '스마트구로홍보관', address: '서울특별시 구로구 새말로 117-21',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000915" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '메리워드지역아동센터', address: '서울특별시 구로구 고척로49 ',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000065" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '성베드로학교', address: '서울특별시 구로구 연동로 320',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000790" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '구로파랑새지역아동센터', address: '서울특별시 구로구 구로동로 38길 32',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000093" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '꿈나래지역아동센터', address: '서울특별시 구로구 고척로6길 29',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000093" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '함사람지역아동센터', address: '서울특별시 구로구 경서로 82-14',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001345" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '우신지역아동센터', address: '서울특별시 구로구 오리로 1265',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002141" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '구로노인종합복지관', address: '서울특별시 구로구 새말로 16길 7',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/place.do?sch_area_cd=101&sch_signgu_cd=10107&sch_oper_sttus_se_cd=&sch_edc_plc_se_cd=&sch_edc_place_nm=" style="color:red" target="_blank">교육신청</a>'
 },

  //금천구
	{ title: '금천 구청 교육장', address: '서울특별시 금천구 시흥대로 73길 70',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000063" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '독산2동주민센터', address: '서울특별시 금천구 독산로179',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000077" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '롯데1차 경로당', address: '서울특별시 금천구 벚꽃로 40',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001478" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '구립시흥노인교실', address: '서울특별시 금천구 금하로 23다길 8',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001479" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '금천어르신복지센터', address: '서울특별시 금천구 독산동 293-14',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002142" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '금천노인종합복지관', address: '서울특별시 금천구 시흥대로 51길 93-32',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000064" style="color:blue" target="_blank">교육신청</a>'
 },

  //양천구
  { title: '양천어르신종합복지관', address: '서울특별시 양천구 목동로3길 106',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000083" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '신목종합사회복지관', address: '서울특별시 양천구 신목로 5',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000173" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '목동어르신복지관', address: '서울특별시 양천구 목동중앙로 3길 21',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000166" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '양천구50플러스센터', address: '서울특별시 양천구 남부순환로 83길 53',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002135" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '서서울어르신복지관', address: '서울특별시 양천구 가로공원로 60가길 16',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000104" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '행복둥지 작은도서관', address: '서울특별시 양천구 신월로24길 8',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001521" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '신월4동주민센터', address: '서울특별시 양천구 오목로5길34',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002494" style="color:blue" target="_blank">교육신청</a>'
 },

  //영등포구
  { title: '여의도어르신복지센터', address: '서울특별시 영등포구 여의대방로 372',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000140" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '영등포어르신복지센터', address: '서울특별시 영등포구 도영로22길 36',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000141" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '시니어행복발전센터', address: '서울특별시 영등포구 디지털로 441',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000131" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '모랫말어르신복지센터', address: '서울특별시 영등포구 도영로 41',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000144" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '영등포동자치회관', address: '서울특별시 영등포구 국회대로 44길 4',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002400" style="color:blue" target="_blank">교육신청</a>'
 },
  { title: '양평2동 주민센터', address: '서울특별시 영등포구 선유로47길 30',
    iwContent:
      '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002145" style="color:blue" target="_blank">교육신청</a>'
 },



 //인천사업단

  //중구
   { title: '중구청', address: '인천시 중구 해안동2가 8-12', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000535" style="color:blue" target="_blank">교육신청</a>' },
   { title: '영종하늘도서관', address: '인천광역시 중구 하늘중앙로 132', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000348" style="color:blue" target="_blank">교육신청</a>' },
   { title: '영종1동 행정복지센터', address: '인천광역시 중구 하늘달빛로 120', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000826" style="color:blue" target="_blank">교육신청</a>' },
   { title: '영종공감복지센터', address: '인천광역시 중구 하늘달빛로 78', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000379" style="color:blue" target="_blank">교육신청</a>' },
   { title: '성미가엘종합사회복지관', address: '인천광역시 중구 송학로 40', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000378" style="color:blue" target="_blank">교육신청</a>' },



  //동구
   { title: '동구청 정보화교육장', address: '인천 동구 금곡로 67', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000500" style="color:blue" target="_blank">교육신청</a>' },
   { title: '동구 장애인 주간보호센터', address: '인천 동구 만석로 53', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000477" style="color:blue" target="_blank">교육신청</a>' },
   
   //미추홀구
   { title: '용현교육관', address: '인천광역시 미추홀구 용마루로 64', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002546" style="color:blue" target="_blank">교육신청</a>' },
   { title: '도화2,3동 행정복지센터', address: '인천광역시 미추홀구 장고개로 29-1', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001242" style="color:blue" target="_blank">교육신청</a>' },
   { title: '미추홀구청 정보화교육장', address: '인천광역시 미추홀구 독정이로 95', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000491" style="color:blue" target="_blank">교육신청</a>' },
   { title: '은혜비전센터', address: '인천광역시 미추홀구 길파로27번길 66-1 ', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002443" style="color:blue" target="_blank">교육신청</a>' },
   { title: '용현5동 행정복지센터', address: '인천광역시 미추홀구 토금북로 60', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002368" style="color:blue" target="_blank">교육신청</a>' },
   { title: '주안영상미디어센터', address: '인천광역시 미추홀구 주안1동 석바위로 68', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002369" style="color:blue" target="_blank">교육신청</a>' },
   { title: '제물포지하도상가 배움터', address: '인천광역시 미추홀구 경인로 지하 125', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002370" style="color:blue" target="_blank">교육신청</a>' },
   { title: '수봉도서관', address: '인천광역시 미추홀구 경인로 218', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000458" style="color:blue" target="_blank">교육신청</a>' },
   //{ title: '옹진군청', address: '인천광역시 미추홀구 매소홀로 120 (용현동) ', iwContent: '<a href="" style="color:blue" target="_blank">교육신청</a>' },
 

   //연수구
   { title: 'K디지털 플랫폼', address: '인천시 연수구 인천타워대로 99', iwContent: '<a href="" style="color:blue" target="_blank">교육신청</a>' },
   { title: '에듀메이커스페이스', address: '인천광역시 연수구 송도과학로 32', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000536" style="color:blue" target="_blank">교육신청</a>' },
   { title: '연수구청', address: '인천광역시 연수구 원인재로 115', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000377" style="color:blue" target="_blank">교육신청</a>' },
   { title: '송도 글로벌 평생학습관', address: '인천광역시 연수구 송도문화로 119', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002309" style="color:blue" target="_blank">교육신청</a>' },



   //남동구
   { title: '미추홀도서관', address: '인천광역시 남동구 인주대로776번길 53', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000499" style="color:blue" target="_blank">교육신청</a>' },
   { title: '만월종합사회복지관', address: '인천광역시 남동구 서판로54번길 12', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000375" style="color:blue" target="_blank">교육신청</a>' },
   { title: '인천남동지역 자활센터', address: '인천광역시 남동구 만수로 12-6', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001239" style="color:blue" target="_blank">교육신청</a>' },
   { title: '논현종합사회복지관', address: '인천광역시 남동구 호구포로 292', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002121" style="color:blue" target="_blank">교육신청</a>' },
   { title: '남동구 평생학습관', address: '인천광역시 남동구 소래로 645', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000374" style="color:blue" target="_blank">교육신청</a>' },
   { title: '북한이탈주민센터', address: '인천광역시 남동구 앵고개로941번길 11-22', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002340" style="color:blue" target="_blank">교육신청</a>' },
   { title: '만수3동 행정복지센터', address: '	인천광역시 남동구 서판로 11', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001236" style="color:blue" target="_blank">교육신청</a>' },



   //부평구
   { title: '부평6동 행정복지센터', address: '인천광역시 부평구 동수로 70', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002122" style="color:blue" target="_blank">교육신청</a>' },
   { title: '부개2동 행정복지센터', address: '인천광역시 부평구 동수천로 104', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000030" style="color:blue" target="_blank">교육신청</a>' },
   { title: '부평2동 행정복지센터', address: '인천광역시 부평구 부영로 23', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000457" style="color:blue" target="_blank">교육신청</a>' },



   //계양구
   { title: '계양구청 평생학습관', address: '인천광역시 계양구 계산새로 88', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000492" style="color:blue" target="_blank">교육신청</a>' },
   { title: '효성노인문화센터', address: '인천광역시 계양구 봉오대로 516', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210001231" style="color:blue" target="_blank">교육신청</a>' },
   { title: '계산노인문화센터', address: '인천광역시 계양구 경명대로 980', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000476" style="color:blue" target="_blank">교육신청</a>' },
   { title: '계양구노인복지관', address: '인천광역시 계양구 효서로341번길 11', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000478" style="color:blue" target="_blank">교육신청</a>' },
   { title: '인천광역시교육청 계양도서관', address: '인천광역시 계양구 계양산로134번길 18', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20200000137" style="color:blue" target="_blank">교육신청</a>' },


   //서구
   { title: '청라2동 행정복지센터', address: '인천광역시 서구 청라커낼로 269', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000510" style="color:blue" target="_blank">교육신청</a>' },
   { title: '가좌4동 행정복지센터', address: '인천광역시 서구 장고개로280번길 14', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000480" style="color:blue" target="_blank">교육신청</a>' },
   { title: '당하동 행정복지센터', address: '인천광역시 서구 청마로167번길 19', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000509" style="color:blue" target="_blank">교육신청</a>' },
   { title: '연희노인문화센터', address: '인천광역시 서구 승학로 263', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000460" style="color:blue" target="_blank">교육신청</a>' },
   { title: '푸른숲 작은도서관', address: '인천광역시 서구 서달로49번길 10', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210000535" style="color:blue" target="_blank">교육신청</a>' },
   { title: '서구청', address: '인천광역시 서구 서곶로 307', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20210002162" style="color:blue" target="_blank">교육신청</a>' },
 
  //강화군
   { title: '강화군 행복센터', address: '인천광역시 강화군 강화읍 남문로 19 ', iwContent: '<a href="https://www.xn--2z1bw8k1pjz5ccumkb.kr/edc/crse/plcdtl.do?&sch_edc_place_id=20190000486" style="color:blue" target="_blank">교육신청</a>' }

 
];


// 커스텀 오버레이 -- 교육신청 윈도우 변경
// 배움터 위치 출력
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
      var customOverlay = new kakao.maps.CustomOverlay({
      content:'<div class ="label"><span class="left"></span><span class="center">' + position.title +'<br>'+ position.iwContent + '</span><span class="right"></span></div>',        
      position: coords
      });
      
      // 커스텀 오버레이를 지도에 표시합니다
      customOverlay.setMap(map);
    }
  });
});



// 주소 검색하기
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
        infowindow.setContent('<div style="width:150px;text-align:center;padding:10px;font-size:15px;">' + place.place_name + '</div>');
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
        
        
        // // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        // map.setCenter(coords);
      }
    });
  });
};

new Search();

// 현위치 나타내기
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;margin-left:25px;">나의 위치</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker2(locPosition, message);
      
            
      });
  function panTo() {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
      
      // 이동할 위도 경도 위치를 생성합니다 
      var moveLatLon = new kakao.maps.LatLng(lat, lon);
      
      // 지도 중심을 부드럽게 이동시킵니다
      // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
      map.panTo(moveLatLon); 
      
      });
    }
  } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}




// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker2(locPosition, message) {
  var imageSrc = 'https://i.ibb.co/xzhfMGz/3.png" alt="placeholder-684908', // 마커이미지의 주소입니다   
      imageSize = new kakao.maps.Size(43 , 45), // 마커이미지의 크기입니다
      imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
   var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

  
  
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition,
        image:markerImage
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    
