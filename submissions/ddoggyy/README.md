# Week02 Assignment - React 실습

## Practice 1: Components

**설명:**
- React 컴포넌트의 기본 개념 학습
- 재사용 가능한 컴포넌트(`Welcome`, `Button`) 생성 및 사용

**주요 학습 내용:**
- 함수형 컴포넌트 작성
- Props를 통한 데이터 전달
- 컴포넌트 조합

---

## Practice 2: Counter

**설명:**
- `useState` Hook을 사용한 상태 관리 학습
- 상태 변경에 따른 UI 업데이트

**주요 기능:**
- 숫자 증가/감소 (+1, -1, +5, -5)
- Reset 버튼 (count를 0으로 초기화)
- 조건부 css 기능 사용 (count > 10일 때 빨강, count < 0일 때 파랑)

---

## Practice 3: Todo List

**설명:**
- 상태 관리를 활용한 Todo 애플리케이션
- 배열 조작과 필터링 기능 학습

**주요 기능:**
- Todo 항목 추가
- Todo 항목 삭제
- Todo 완료/미완료 토글
- 필터링 (전체/완료/미완료)

---

## Practice 4: Profile

**설명:**
- 상태 업데이트 패턴 학습
- 자식 컴포넌트에서 부모 상태 변경하기 (Props & Callback)

**주요 기능:**
- ProfileCard: 프로필 정보 표시
- ProfileEditor: 프로필 정보 수정
- 양방향 데이터 바인딩

**사용된 패턴:**
- 부모 컴포넌트에서 상태 관리
- 자식 컴포넌트에서 콜백 함수를 통해 부모 상태 업데이트

---

## Practice 5: Shopping Cart

**설명:**
- 실제 전자상거래 기능 구현
- 배열 상태 관리와 복잡한 로직

**주요 기능:**
- 상품 목록 표시 (상품명, 가격)
- 장바구니에 상품 추가
- 장바구니 수량 증가/감소
- 장바구니 항목 삭제
- 총 가격 계산 (reduce 함수 사용)

**메서드:**
- `map()`: 상품 목록/장바구니 렌더링
- `find()`: 특정 상품 찾기
- `filter()`: 상품 제거
- `reduce()`: 총 가격 계산

---

## 실행 방법

```bash
# react 폴더에 복사 및 붙여넣기 후
npm start
# import하여 실행
```