# React-testing-library

`React-testing-library`는 테스트를 위한 가상 DOM을 제공합니다.

- 가상 돔을 통해 컴포넌트를 렌더링하고, (ex. render())
- 가상 돔을 검색할 수 있으며, (ex. getByText())
- 가상 돔과 상호작용하여 요소를 클릭하거나 텍스트를 입력할 수 있도록 도와줍니다.
- 가상 돔을 사용하기 때문에 브라우저 없이 테스트를 할 수 있도록 해줍니다.

## Jest

`Jest`는 테스트를 찾고 실행하며 단언문으로 성공/실패를 결정하는 테스트 러너의 역할을 합니다.

- 테스트 러너의 종류로는 Mocha나 Jasmine 등이 있습니다.
- RTL은 테스트러너로 Jest를 추천하고 있으며, 리액트앱 설치시에도 기본으로 jest가 설치되어있기 때문에 사용하기 편리합니다.
