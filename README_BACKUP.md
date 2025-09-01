# Vue 3 + TypeScript + Vite

테스트 계정 정보:
* 성공 로그인 (Success Login):
       * 이메일: test@example.com
       * 비밀번호: password (아무거나 입력해도 됨, 목업이므로)
       * 로그인 성공 시, "Test User님, 환영합니다!" 알림이 표시되고 TODO 목록이 로드됩니다.


   * 실패 로그인 (Failure Login - 일반적인 로그인 정보 오류):
       * 이메일: wrong@example.com (또는 test@example.com이 아닌 다른 이메일)
       * 비밀번호: any_wrong_password (아무거나 입력해도 됨)
       * 로그인 시도 시, "이메일 또는 비밀번호를 확인해주세요."라는 다이얼로그 팝업이 표시됩니다.


   * 실패 로그인 (Failure Login - 특정 이메일로 인한 실패 시뮬레이션):
       * 이메일: fail@example.com
       * 비밀번호: any_password (아무거나 입력해도 됨)
       * 로그인 시도 시, "로그인 정보가 올바르지 않습니다."라는 다이얼로그 팝업이 표시됩니다.


   * 인증 만료/유효하지 않은 토큰 시뮬레이션:
       * 로그인 후, 브라우저 개발자 도구에서 localStorage의 authToken 값을 임의로 변경하거나 삭제한 후 페이지를 새로고침하거나 TODO 관련 작업을 시도해보세요.
       * `src/lib/http.ts`의 인터셉터와 `src/services/todo.service.ts`의 `authenticateRequest` 함수에 의해 "인증 정보가 만료되었거나 유효하지 않습니다. 다시 로그인해주세요." 
         알림이 표시되고 로그아웃 처리될 것입니다.


---

디버깅 설정 (launch.json)


   1. 실행 및 디버그 패널 열기: VS Code의 왼쪽 사이드바에서 벌레 모양 아이콘을 클릭하거나       
      Ctrl+Shift+D 단축키를 눌러 "실행 및 디버그" 패널을 엽니다.


   2. `launch.json` 파일 생성: 패널 상단에 "launch.json 파일 만들기"라는 파란색 버튼이나        
      링크가 보이면 클릭합니다. 만약 .vscode/launch.json 파일이 이미 존재한다면, 패널
      상단의 드롭다운 메뉴 옆에 있는 톱니바퀴 아이콘을 클릭하여 파일을 열 수 있습니다.

   3. 디버거 선택: launch.json 생성을 위해 디버거를 선택하라는 메시지가 나타나면, "웹 앱        
      (Chrome)" 또는 "웹 앱 (Edge)" 를 선택해 주세요.


   4. `launch.json` 파일 수정: 생성된 .vscode/launch.json 파일의 내용을 아래와 같이
      수정하거나 교체합니다. 이 설정은 VS Code의 디버거를 실행했을 때, Vite 개발 서버
      URL로 Chrome(또는 Edge)을 실행하도록 지시합니다.

---

✦ 디버깅 시작하기


  이제 모든 설정이 완료되었습니다. 아래 단계에 따라 디버깅을 시작할 수 있습니다.


   1. 개발 서버 시작: VS Code의 터미널에서 npm run dev 명령을 실행하여 Vite 개발 서버를
      시작합니다.
   2. 중단점 설정: 디버깅하고 싶은 코드 라인(예: src/pages/Home.vue의 script 부분 또는
      src/stores/auth.ts의 특정 함수 내부)을 클릭하여 빨간 점(중단점)을 설정합니다.
   3. 디버거 실행: "실행 및 디버그" 패널로 돌아가 상단의 드롭다운 메뉴에서 "Vite: 디버그        
      모드 실행" 구성을 선택한 후, 녹색 시작 버튼(▶)을 누르거나 F5 키를 누릅니다.
   4. 디버깅: 새 Chrome 창이 http://localhost:5173 주소로 열립니다. 웹 애플리케이션을
      사용하다가 코드가 설정해둔 중단점에 도달하면, 실행이 멈추고 VS Code에서 변수 확인,        
      단계별 코드 실행 등 디버깅을 할 수 있습니다.