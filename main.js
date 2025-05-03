userInfo = {이름: ", 성별: ", ", 나이: ", 생년월일: " };
currentUserId = null로 설정합니다;

$(document).준비 완료 (함수) {
 $('<span id="인사"></span>).sertBefore('#loginLink');
 $('<a id="logoutLink" href="#"style="display:none">로그아웃</a>).insertAfter('#loginLink');


 ('scroll 다운').클릭((() =>
 ('html, 몸').애니메이트({스크롤탑: $('메인').오프셋(.탑 }, 600)
 );


 ('scroll 업').클릭(() =>
 ('html, 몸').애니메이트({스크롤탑: 0 }, 600)
 );

 $('#loginLink').클릭(e => {
 e.preventDefault();
 ('#loginModal').페이드인();
 });


 $('#myInfoLink').클릭(e => {
 e.preventDefault();
 만약 (userInfo.name ) {
 $('#infoName').text('이름: ' + userInfo.name );
 $('#infoGender').text('성별': ' + (userInfo.gender || ');
 $('#infoAge').text('나이': ' + (userInfo.age || ');
 $('#infoBirthdate').text('생년월일: ' + userInfo.birthdate);
    } 또 다른 {
 $('#infoName').text('로그인 정보가 없습니다.');
 ('#infoGender, #infoAge, #infoBirthdate').text(");
    }
 ('#myInfoModal').페이드인();
 });


 ('닫다').클릭(함수) {
 $(이것).가장 가까운 ('modal').페이드아웃();
 });


 $('#saveInfoBtn').클릭(부호 e => {
 e.preventDefault();
 대기 handleAuth();
 });


 $(문서).on('클릭', '#logoutLink', 함수 (e) {
 e.preventDefault();
 handleLogout();
 });
});

비동기 기능. handleAuth() {
 const name = $('#name').val ().trim();
 const gender = $('#gender').val ().trim();
 constage = $('#age').val ().trim();
 생년월일 = $('#생년월일').val ().trim();
 const password = $('#password').val ();

 만약 (!이름 || 생년월일 || 비밀번호) {
 alert('이름, 생년월일, 비밀번호는 필수입니다.');
 반환;
  }


 사용자 정보 = {이름, 성별, 나이, 생년월일};

 ('#loginModal').페이드아웃();
 ('#loginLink').hide();
 ('#logoutLink').() 표시;
 $('#greeting')text('안녕하세요, ${name}님!`);
}

기능. 핸들로그아웃() {
 userInfo = {이름: ", 성별: ", 나이: ", 생년월일: " };
 $('#greeting')text('');
 ('#로그인링크').() 표시;
 ('#logoutLink').hide();
}

// 클리어 완료되었습니다 라고 바꾼거
('#클리어 미션').클릭((() => {
 ('미션 콘텐츠').html('<h2>완료되었습니다!</h2>';
});
