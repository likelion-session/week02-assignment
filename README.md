# 2주차 과제 — React 기초

풀스택 개발 강의 (React + Java Spring Boot) **2주차** 과제입니다.  
이 저장소는 **과제 안내 전용**이며, 수강생은 **Fork 후 Pull Request**로 제출합니다.

---

## 📌 제출 방식 (PR)

1. 이 저장소 상단 **Fork** → 본인 계정으로 복사  
2. Fork한 저장소를 로컬에 `git clone`  
3. 브랜치 생성: `git checkout -b week02/본인GitHub아이디`  
4. 아래 **제출 폴더 규칙**에 맞게 파일 추가 후 커밋·푸시  
5. **원본 저장소(`likelion-session/week02-assignment`)** 로 **Pull Request** 생성  
6. PR 제목 예: `[2주차] 홍길동 (GitHub: username)`

자세한 단계는 [SUBMISSION.md](./SUBMISSION.md)를 참고하세요.

---

## 📁 제출 폴더 규칙

```
submissions/
└── {본인GitHub아이디}/
    ├── README.md                    # 이름, 완료한 실습, 실행 방법, 스크린샷 안내
    ├── practice1-components/      # 실습 1: Welcome, Button, App
    ├── practice2-counter/         # 실습 2: 카운터
    ├── practice3-todo/            # 실습 3: Todo 리스트
    ├── practice4-profile/         # 실습 4: 프로필 카드
    ├── practice5-cart/            # 실습 5: 쇼핑 카트
    └── (선택) practice6-blog/     # 종합 실습: 블로그 홈
```

- 폴더명은 **반드시 본인 GitHub 사용자명**과 동일하게 합니다.  
- 각 `practice*` 폴더는 **Create React App** 또는 **Vite + React** 등으로 만든 프로젝트 전체를 넣거나, 강의에서 안내한 구조에 맞게 **소스 파일만** 넣어도 됩니다.  
- `README.md`에 **어떤 명령으로 실행하는지**(`npm install`, `npm start` 등)를 적어 주세요.

---

## ✅ 과제 내용

문제 전문·배점·팁은 **[ASSIGNMENT.md](./ASSIGNMENT.md)** 를 참고하세요.

| 실습 | 요약 | 배점 |
|------|------|------|
| 1 | Welcome / Button / App 컴포넌트 & Props | 15 |
| 2 | 카운터 (State, 조건부 스타일, ±5) | 20 |
| 3 | Todo 리스트 (추가·삭제·완료·필터) | 25 |
| 4 | 프로필 카드 + 에디터 (Props·State 연동) | 20 |
| 5 | 쇼핑 카트 (복합 State) | 20 |
| 종합 | 블로그 홈 (선택, 보너스) | 추가 |

**총점 100점** (종합 실습은 보너스)

---

## 📅 마감

- 강의에서 안내하는 **마감일시**를 따릅니다.

---

## ❓ 문의

강의 채널 또는 이 저장소 **Issues**로 문의하세요.

---

## 📚 참고

- [React 공식 문서](https://react.dev/)
- [JSX 소개](https://react.dev/learn/writing-markup-with-jsx)
