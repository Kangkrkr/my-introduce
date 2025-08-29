
│  > Vue.js 컴포넌트의 라이프사이클 콜백 함수     │
╰────────────────────────────────────────────╯

✦ 네, Vue.js 컴포넌트의 라이프사이클 콜백 함수(Lifecycle Hooks)에 대해 설명해 드리겠습니다. 현재 프로젝트에서 사용하고 계신 `<script setup>` (Composition API) 구문을 기준으로 설명하겠습니다.  

  라이프사이클 훅이란?


  Vue 컴포넌트가 생성되고, 화면에 렌더링되고, 업데이트되거나, 사라지는 각 단계를 "라이프사이클(생명주기)" 이라고 합니다. 라이프사이클 훅은 이 각 단계에서 특정 코드를 실행할 수 있도록 Vue가 제 공하는 특별한
  함수들입니다.

  예를 들어, "컴포넌트가 화면에 처음 나타났을 때" 서버에서 데이터를 가져오거나, "컴포넌트가 사라지기 직전"에 사용했던 자원을 정리하는 등의 작업을 할 수 있습니다.


  주요 라이프사이클 훅 (Composition API)

  <script setup> 내에서는 onMounted, onUnmounted 등 on으로 시작하는 함수를 import 해서 사용합니다.



  ┌───────────────────┬──────────────────────────────────────────┬─────────────────────────────────────────────────────────────────────────────────────┐
  │ 훅 (Hook)          │ 설명                                       │ 주요 사용 사례                                                                            │
  ├───────────────────┼──────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────────┤
  │ **`onMounted`**   │ 컴포넌트가 생성되고 **DOM에 렌더링(마운트)된 후**에 호출됩니다.  │ • 서버 데이터 가져오기 (API 호출)<br>• DOM에 직접 접근하는 라이브러리 초기화<br>• 이벤트 리스너 등록                  │
  │ **`onUpdated`**   │ 컴포넌트의 데이터가 변경되어 **DOM이 업데이트된 후**에 호출됩니다. │ • DOM 업데이트 후 특정 DOM 요소에 접근해야 할 때                                                   
 │
  │ **`onUnmounted`** │ 컴포넌트가 **DOM에서 제거(마운트 해제)되기 직전**에 호출됩니다.  │ • `onMounted`에서 등록한 이벤트 리스너 해제<br>• `setInterval` 등 타이머 정리<br>• 메모리 누수 방지를 위한 정리 작업 │
  │ `onBeforeMount`   │ `onMounted` 직전에 호출됩니다. (DOM 렌더링 전)       │ 거의 사용되지 않음                                                                          │
  │ `onBeforeUpdate`  │ `onUpdated` 직전에 호출됩니다. (DOM 업데이트 전)      │ 거의 사용되지 않음                                                                          │
  │ `onBeforeUnmount` │ `onUnmounted` 직전에 호출됩니다.                 │ 거의 사용되지 않음                                                                          │
  └───────────────────┴──────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────────────────────┘

  참고: <script setup> 블록 자체가 컴포넌트가 생성(created) 될 때 실행되는 코드 영역입니다.

  사용 예시

  다음은 주요 라이프사이클 훅을 사용한 예시 코드입니다.



    1 <script setup lang="ts">
    2 import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
    3
    4 const message = ref('라이프사이클 훅 예제')
    5
    6 // 이 코드는 <script setup>에 직접 작성되어 컴포넌트 생성 시점에 실행됩니다.
    7 console.log('1. 컴포넌트 생성됨 (setup)')
    8
    9 // onMounted: DOM에 렌더링 된 후
   10 onMounted(() => {
   11   console.log('2. 컴포넌트가 DOM에 마운트됨')
   12   // 이 시점에서 DOM 요소에 접근할 수 있습니다.
   13   // 예: window.addEventListener('resize', myResizeHandler)
   14 })
   15
   16 // onUpdated: 데이터 변경으로 DOM이 업데이트 된 후
   17 onUpdated(() => {
   18   console.log('컴포넌트 업데이트됨!')
   19 })
   20
   21 // onUnmounted: 컴포넌트가 사라지기 직전
   22 onUnmounted(() => {
   23   console.log('3. 컴포넌트가 마운트 해제됨')
   24   // 여기서 정리 작업을 수행합니다.
   25   // 예: window.removeEventListener('resize', myResizeHandler)
   26 })
   27 </script>
   28
   29 <template>
   30   <div>
   31     <h1>{{ message }}</h1>
   32     <button @click="message = '메시지가 변경되었습니다!'">
   33       메시지 변경 (업데이트 발생)
   34     </button>
   35   </div>
   36 </template>



  이 컴포넌트가 화면에 나타나고, 버튼을 클릭하고, 다른 페이지로 이동하여 사라질 때 콘솔에 찍히는 로그를 통해 라이프사이클의 흐름을 명확하게 이해할 수 있습니다.


╭─────────────────────────────────────────╮
│  > 라이프 사이클 함수에 대한 고급 활용  │
╰─────────────────────────────────────────╯

✦ 네, Vue 라이프사이클 훅의 고급 활용법에 대해 몇 가지 패턴과 예시를 중심으로 설명해 드리겠습니다.

  고급 활용은 주로 성능 최적화, 코드 재사용성, 그리고 외부 라이브러리와의 통합에 중점을 둡니다.


  1. 로직 재사용을 위한 컴포저블(Composable) 활용


  가장 중요하고 강력한 고급 활용법입니다. 여러 컴포넌트에서 반복되는 라이프사이클 로직(예: 창 크기 추적, 특정 데이터 구독)을 별도의 함수로 분리하여 재사용할 수 있습니다.

  문제: A 컴포넌트와 B 컴포넌트 모두 창(window)의 너비를 실시간으로 추적해야 할 때, 각 컴포넌트의 onMounted와 onUnmounted에 똑같은 코드를 작성해야 합니다.


  해결: 이 로직을 useWindowResize라는 컴포저블 함수로 분리합니다.

  예시: `useWindowResize.ts` 컴포저블 만들기



    1 // src/composables/useWindowResize.ts
    2
    3 import { ref, onMounted, onUnmounted, type Ref } from 'vue'
    4
    5 // 컴포저블 함수 정의
    6 export function useWindowResize() {
    7   // 창의 너비와 높이를 저장할 반응형 변수
    8   const width: Ref<number> = ref(window.innerWidth)
    9   const height: Ref<number> = ref(window.innerHeight)
   10
   11   // 리사이즈 이벤트를 처리할 함수
   12   const handleResize = () => {
   13     width.value = window.innerWidth
   14     height.value = window.innerHeight
   15   }
   16
   17   // onMounted: 컴포넌트가 마운트되면 'resize' 이벤트 리스너를 등록
   18   onMounted(() => {
   19     window.addEventListener('resize', handleResize)
   20   })
   21
   22   // onUnmounted: 컴포넌트가 제거되기 전에 이벤트 리스너를 해제 (메모리 누수 방지)
   23   onUnmounted(() => {
   24     window.removeEventListener('resize', handleResize)
   25   })
   26
   27   // 외부에서 사용할 수 있도록 반응형 변수를 반환
   28   return { width, height }
   29 }


  컴포넌트에서의 사용법


  이제 어떤 컴포넌트에서든 이 로직을 한 줄로 가져와 사용할 수 있습니다.



    1 <script setup lang="ts">
    2 import { useWindowResize } from '@/composables/useWindowResize'
    3
    4 // 컴포저블을 호출하여 창 크기를 가져옴
    5 const { width, height } = useWindowResize()
    6 </script>
    7
    8 <template>
    9   <div>
   10     <p>현재 창 너비: {{ width }}px</p>
   11     <p>현재 창 높이: {{ height }}px</p>
   12   </div>
   13 </template>

  이처럼 라이프사이클 로직을 컴포저블로 분리하면 코드가 매우 깔끔해지고, 테스트가 용이하며, 여러 곳에서 쉽게 재사용할 수 있습니다.

  2. 외부 라이브러리와의 안전한 통합


  차트, 지도, 특정 UI 라이브러리 등 DOM에 직접 접근해야 하는 외부 라이브러리를 Vue 컴포넌트 내에서 안전하게 사용하고 제거할 수 있습니다.


  핵심:
   - onMounted에서 라이브러리를 초기화합니다. (DOM이 생성된 후)
   - onUnmounted에서 라이브러리 인스턴스를 파괴(destroy)하여 메모리 누수를 방지합니다.

  예시: 차트 라이브러리 통합



    1 <script setup lang="ts">
    2 import { ref, onMounted, onUnmounted, shallowRef } from 'vue'
    3 import Chart from 'chart.js/auto' // 예시 라이브러리
    4
    5 // 차트를 그릴 <canvas> 요소를 참조하기 위한 ref
    6 const chartCanvas = ref<HTMLCanvasElement | null>(null)
    7
    8 // 차트 인스턴스를 저장할 ref.
    9 // 반응형 추적이 필요 없으므로 shallowRef를 사용해 성능을 최적화합니다.
   10 const chartInstance = shallowRef<Chart | null>(null)
   11
   12 onMounted(() => {
   13   if (chartCanvas.value) {
   14     // DOM 요소가 준비되면 차트 라이브러리를 초기화
   15     chartInstance.value = new Chart(chartCanvas.value, {
   16       type: 'bar',
   17       data: {
   18         labels: ['Red', 'Blue', 'Yellow'],
   19         datasets: [{
   20           label: '# of Votes',
   21           data: [12, 19, 3],
   22         }]
   23       }
   24     })
   25   }
   26 })
   27
   28 onUnmounted(() => {
   29   // 컴포넌트가 사라지기 전에 차트 인스턴스를 파괴
   30   if (chartInstance.value) {
   31     chartInstance.value.destroy()
   32   }
   33 })
   34 </script>
   35
   36 <template>
   37   <div style="width: 400px;">
   38     <canvas ref="chartCanvas"></canvas>
   39   </div>
   40 </template>


  3. 성능 최적화 (디바운싱 & 스로틀링)


  scroll이나 resize 같이 매우 빈번하게 발생하는 이벤트는 성능 저하의 원인이 될 수 있습니다. onMounted에서 이런 이벤트를 등록할 때, 디바운싱(Debouncing)이나 스로틀링(Throttling)을 적용하여 이벤트 핸들러의 호출
  횟수를 제어할 수 있습니다.










  예시: `useWindowResize`에 디바운스 적용하기



    1 // ... (useWindowResize.ts 파일)
    2 // 디바운스 함수 (간단한 구현 예시)
    3 function debounce(fn: Function, delay = 200) {
    4   let timeoutId: number | null = null
    5   return (...args: any[]) => {
    6     if (timeoutId) clearTimeout(timeoutId)
    7     timeoutId = window.setTimeout(() => {
    8       fn(...args)
    9     }, delay)
   10   }
   11 }
   12 
   13 export function useWindowResize() {
   14   const width = ref(window.innerWidth)
   15   const height = ref(window.innerHeight)
   16 
   17   // 디바운스가 적용된 핸들러
   18   const handleResize = debounce(() => {
   19     width.value = window.innerWidth
   20     height.value = window.innerHeight
   21     console.log('디바운스된 이벤트 발생!')
   22   })
   23 
   24   onMounted(() => {
   25     window.addEventListener('resize', handleResize)
   26   })
   27 
   28   onUnmounted(() => {
   29     window.removeEventListener('resize', handleResize)
   30   })
   31 
   32   return { width, height }
   33 }

  이렇게 하면 창 크기를 조절하는 동안 handleResize 함수가 200ms마다 한 번씩만 호출되어 불필요한 연산을 크게 줄일 수 있습니다.

---


╭────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│  > @src\components\practices\Parent.vue 파일의 6번라인과 같이 boolean 변수를 props 로 넘길수는 없어 ?  │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────╯

 ╭───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
 │ ✔  ReadManyFiles Will attempt to read and concatenate files using patterns: `src\components\practices\Parent.vue` (within target directory: `C:\문서\개…  │
 │                                                                                                                                                           │
 │    ### ReadManyFiles Result (Target Dir: `C:\문서\개발\자바스크립트\타입스크립트\vue-todo-app`)                                                           │
 │                                                                                                                                                           │
 │    No files were read and concatenated based on the criteria.                                                                                             │
 ╰───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
✦ 참조하신 파일을 찾을 수 없어 정확한 코드를 볼 수는 없지만, 질문하신 내용을 바탕으로 Vue에서 Boolean 타입의 props를 전달하는 올바른 방법을 설명해
  드리겠습니다.


  결론부터 말씀드리면, 당연히 boolean 변수를 props로 넘길 수 있습니다. 하지만 자주 발생하는 몇 가지 실수 패턴이 있습니다.


  핵심은 정적인 값(static value)과 동적인 값(dynamic value)의 전달 방법을 구분하는 것입니다.
   - prop-name="값": 문자열(String) "값"을 그대로 전달합니다.
   - :prop-name="값": JavaScript 표현식/변수 "값"을 평가하여 전달합니다. (:은 v-bind:의 단축 문법입니다.)

  Boolean 값을 Props로 전달하는 방법

  1. true 값을 전달할 때


  true는 두 가지 방법으로 전달할 수 있습니다.

  방법 A: 속성 이름만 명시 (가장 간편)
  props 이름만 적으면 true로 인식됩니다.

   1 <ChildComponent is-visible />



  방법 B: 동적 바인딩 사용
  :를 사용하여 명시적으로 boolean true를 전달합니다.

   1 <ChildComponent :is-visible="true" />


  2. false 값을 전달할 때


  false를 전달할 때는 반드시 동적 바인딩(`:`)을 사용해야 합니다. 이것이 가장 많이 실수하는 부분입니다.

  올바른 방법:

   1 <ChildComponent :is-visible="false" />


  잘못된 방법 (주의!):


   1 <!-- 이렇게 하면 Boolean `false`가 아니라, 문자열 "false"가 전달됩니다. -->
   2 <!-- 문자열 "false"는 'truthy' 값이므로, 자식 컴포넌트는 이 값을 true로 인식합니다! -->
   3 <ChildComponent is-visible="false" />


  3. 부모의 data 변수를 전달할 때


  부모 컴포넌트의 ref나 reactive 변수를 전달할 때도 반드시 동적 바인딩(`:`)을 사용해야 합니다.

  Parent.vue 예시:


    1 <script setup lang="ts">
    2 import { ref } from 'vue'
    3 import ChildComponent from './ChildComponent.vue'
    4 
    5 const showChild = ref(true)
    6 
    7 const toggleChild = () => {
    8   showChild.value = !showChild.value
    9 }
   10 </script>
   11
   12 <template>
   13   <button @click="toggleChild">자식 컴포넌트 토글</button>
   14
   15   <!-- showChild 변수의 값을 is-visible prop으로 전달 -->
   16   <ChildComponent :is-visible="showChild" />
   17 </template>


  ChildComponent.vue 예시:


    1 <script setup lang="ts">
    2 defineProps<{
    3   isVisible: boolean
    4 }>()
    5 </script>
    6 
    7 <template>
    8   <div v-if="isVisible">
    9     <p>저는 자식 컴포넌트입니다!</p>
   10   </div>
   11 </template>


  요약


   - `true` 전달: <ChildComponent is-visible /> 또는 <ChildComponent :is-visible="true" />
   - `false` 전달: 반드시 <ChildComponent :is-visible="false" />
   - 변수 전달: 반드시 <ChildComponent :is-visible="myVariable" />


  아마도 is-visible="false"와 같이 따옴표 안에 false를 문자열로 전달하는 실수를 하셨을 가능성이 높습니다. false 값이나 변수를 전달할 때는 항상 콜론(:)을
  붙여주세요.


---
[vee-validate]

emailAttrs가 vee-validate와 연계하여 정확히 어떤 역할을
  하는지 상세히 설명해 드리겠습니다.


  결론부터 말씀드리면, `emailAttrs`는 `vee-validate`가 유효성 
  검사를 자동으로 수행하는 데 필요한 HTML 속성과 이벤트 
  리스너들의 묶음입니다. <input> 태그에 v-bind="emailAttrs"를
  추가하면, 이 묶음이 해당 input에 자동으로 적용됩니다.

  ---

  defineField의 역할


  먼저 const [email, emailAttrs] = defineField('email') 라인을
  이해해야 합니다. defineField 함수는 두 가지 중요한 요소를
  배열로 반환합니다.


   1. `email` (첫 번째 요소):
       * input의 value(값)와 양방향으로 바인딩될 ref 객체입니다.       
       * <input v-model="email" ... /> 처럼 v-model과 함께
         사용됩니다.
       * 사용자가 input에 텍스트를 입력하면 email ref의 값이
         업데이트되고, 코드에서 email.value를 변경하면 input에
         표시되는 값이 변경됩니다. 즉, 데이터를 담당합니다.


   2. `emailAttrs` (두 번째 요소):
       * input에 적용될 HTML 속성들을 담고 있는 ref 객체입니다.        
       * <input v-bind="emailAttrs" ... /> 처럼 v-bind와 함께
         사용됩니다.
       * 이 객체 안에는 vee-validate가 유효성 검사를 트리거하고        
         필드를 관리하는 데 필요한 것들이 들어있습니다. 즉,
         유효성 검사 동작을 담당합니다.

  ---

  emailAttrs의 내부 상세

  emailAttrs 객체를 v-bind로 input에 연결하면, 실제로는 아래와
  같은 속성들이 동적으로 적용되는 것과 같습니다.



   1 <input
   2   name="email"
   3   @input="vee-validate가 만든 핸들러 함수"
   4   @change="vee-validate가 만든 핸들러 함수"
   5   @blur="vee-validate가 만든 핸들러 함수"
   6   ...기타 필요한 속성들
   7 />



  emailAttrs에 포함된 주요 속성과 이벤트 리스너는 다음과
  같습니다.


   * `name` 속성: name="email" 속성을 input에 추가합니다.
     vee-validate는 이 name을 사용해 어떤 필드가 어떤 유효성
     규칙(zod 스키마) 및 에러 메시지와 연결되는지 식별합니다.
   * 이벤트 리스너 (`onInput`, `onChange`, `onBlur`):
       * 이것이 emailAttrs의 가장 핵심적인 역할입니다.
       * vee-validate는 사용자의 입력(input), 값 변경(change),
         포커스 아웃(blur)과 같은 이벤트를 감지해야 합니다.
       * emailAttrs는 이러한 이벤트가 발생했을 때 유효성 검사를        
         실행하는 내부 핸들러 함수들을 자동으로 input에 연결해
         줍니다.
       * 예를 들어, useForm 설정에 따라 사용자가 이메일을
         입력하다가 다른 곳을 클릭하면(blur 이벤트), emailAttrs에      
         포함된 onBlur 리스너가 자동으로 loginSchema에 정의된
         이메일 유효성 규칙을 실행하고, errors.email 객체를
         업데이트합니다.

  요약

  Login.vue의 <template> 부분을 다시 보면,


   1 <input v-model="email" v-bind="emailAttrs" id=
     "email" ... />



   * `v-model="email"`: input의 값을 email 변수와 연결합니다.
     (데이터 관리)
   * `v-bind="emailAttrs"`: input에서 발생하는 사용자
     이벤트(입력, 포커스 아웃 등)를 vee-validate의 유효성 검사
     시스템과 연결합니다. (동작 및 유효성 검사 관리)


  만약 v-bind="emailAttrs"를 사용하지 않는다면, vee-validate는
  사용자가 언제 값을 입력하고 수정을 마쳤는지 알 수 없게
  됩니다. 그 결과, 유효성 검사는 오직 onSubmit 함수가 호출될
  때만 수동으로 실행되며, 실시간으로 에러 메시지를 보여주는
  기능이 동작하지 않게 됩니다.


  따라서 `emailAttrs`는 `vee-validate`의 자동화된 유효성 검사 
  및 필드 관리 기능을 활성화하는 매우 편리하고 중요한 장치라고
  할 수 있습니다.

---

[TenStack Query]

╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│  > 그런데, import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query' 와 같은 함수들을 쓰는 이유가 뭐야? 무얼위해서, 무엇이 이점이 있어서 쓰는거지 ?  │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

✦ 네, 아주 좋은 질문입니다. axios나 fetch 같은 라이브러리로도 서버와 통신할 수 있는데 왜 굳이 TanStack Query (Vue Query)를 사용하는지, 그 핵심적인 이유와 이점에 대해 설명해
  드리겠습니다.


  간단히 말해, TanStack Query는 단순한 데이터 요청 라이브러리가 아니라, 서버 데이터(Server State)를 관리하고 동기화하는 것을 전문으로 하는 라이브러리입니다.

  ---

  TanStack Query가 해결하려는 문제


  서버에서 가져온 데이터는 앱 내부의 데이터(Client State)와는 다른 특징을 가집니다.


   * 비동기적: 언제 도착할지 모릅니다.
   * 내가 제어할 수 없는 곳에 저장됨: 서버 DB에 저장되어 있어 다른 사용자가 언제든 바꿀 수 있습니다.
   * '오래된(Stale)' 데이터가 될 수 있음: 한번 가져온 데이터는 시간이 지나면 서버의 실제 데이터와 달라질 수 있습니다.

  이런 서버 데이터를 axios만으로 관리하려면 매번 다음과 같은 번거로운 작업들을 직접 처리해야 합니다.


   * 로딩(Loading) 상태 관리 (isLoading = true / false)
   * 에러(Error) 상태 관리 (try...catch 블록)
   * 데이터 캐싱(Caching) để UI 반응 속도 향상
   * 데이터가 오래됐을 때 다시 가져오기(Re-fetching)
   * 데이터 변경 후 관련된 다른 데이터들 새로고침하기

  TanStack Query는 이 모든 복잡하고 반복적인 작업을 자동화하고 표준화해줍니다.

  ---

  주요 함수들의 역할과 이점

  1. useQuery : 데이터 조회 (읽기)


  서버에서 데이터를 가져올 때 사용합니다. (예: GET 요청)


   * 핵심 이점:
       * 자동 캐싱: useQuery는 한번 가져온 데이터를 메모리에 캐싱합니다. 같은 데이터를 다시 요청하면, 일단 캐시된 데이터를 즉시 보여주고 백그라운드에서 새로운 데이터를
         가져옵니다. 이 덕분에 UI가 매우 빠릿하게 느껴집니다.
       * 자동 리프레시: 앱이 비활성화되었다가 다시 활성화될 때(예: 다른 탭에 갔다가 돌아올 때), 네트워크가 재연결될 때 등, 데이터가 오래되었다고 판단되면 알아서 데이터를
         새로고침하여 항상 최신 상태를 유지하려 노력합니다.
       * 간편한 상태 관리: isLoading, isError, isSuccess, data, error 등 데이터 요청의 전체 생명주기에 따른 상태를 변수로 제공합니다. 더 이상 isLoading 같은 ref 변수를 직접
         만들고 try/catch/finally로 관리할 필요가 없습니다.



   1     <!-- 이전 방식 -->
   2     <p v-if="isLoading">로딩 중...</p>
   3     <p v-if="error">에러 발생: {{ error.message }}</p>
   4     <div v-if="data">...</div>
   5
   6     <!-- useQuery를 사용하면 이 상태들을 그냥 받아서 쓰기만 하면 됩니다. -->


  2. useMutation : 데이터 변경 (쓰기)


  서버 데이터를 생성, 수정, 삭제할 때 사용합니다. (예: POST, PUT, DELETE 요청)


   * 핵심 이점:
       * 데이터 변경 후 자동 후처리: 이것이 가장 강력한 기능 중 하나입니다. 예를 들어, 새로운 반려동물을 등록(useMutation 사용)하는 데 성공했다면, 반려동물 목록(useQuery
         사용)을 다시 불러와야 화면이 갱신됩니다. useMutation의 onSuccess 콜백에서 queryClient.invalidateQueries()를 호출하기만 하면, 관련된 useQuery가 자동으로 다시
         실행됩니다.
       * 낙관적 업데이트 (Optimistic Updates): 사용자가 '저장' 버튼을 누르면, 서버의 응답을 기다리지 않고 UI를 먼저 성공한 것처럼 업데이트합니다. 만약 서버에서 에러가 발생하면
         원래대로 되돌립니다. 이로 인해 사용자는 앱이 즉각적으로 반응한다고 느끼게 됩니다.

  3. useQueryClient : 중앙 관리자


  QueryClient는 앱의 모든 쿼리 데이터와 캐시를 관리하는 중앙 허브입니다. useQueryClient는 컴포넌트 내에서 이 중앙 관리자에 접근할 수 있게 해주는 훅(Hook)입니다.


   * 주요 역할:
       * `queryClient.invalidateQueries()`: 위에서 설명했듯이, 특정 쿼리 캐시를 '무효화'하여 해당 데이터를 다시 불러오도록 명령하는 데 사용됩니다. useMutation과 함께 사용할 때
         가장 빛을 발합니다.

  ---

  요약: 왜 사용하는가?


   1. 코드량 감소: 로딩/에러 처리, 캐싱 등 반복적인 코드가 획기적으로 줄어듭니다.
   2. 성능 및 사용자 경험 향상: 자동 캐싱과 낙관적 업데이트 등으로 매우 빠르고 반응성이 좋은 UI를 만들 수 있습니다.
   3. 신뢰성 향상: 자동 리프레시 기능으로 사용자는 항상 최신에 가까운 데이터를 보게 됩니다.
   4. 예측 가능한 상태 관리: 서버 데이터 관리에 대한 강력한 규칙과 패턴을 제공하여 코드가 복잡해지는 것을 막아줍니다.


  결론적으로 TanStack Query는 서버 데이터와 관련된 모든 골치 아픈 문제들을 대신 해결해주는 똑똑한 비서라고 생각하시면 됩니다.

---

│  > 그리고 useQueryClient 의 invalidateQueries 의 역할은 뭐지? 언제쓰는지?  │
╰────────────────────────────────────────────────────────────────────────────╯

✦ 네, invalidateQueries의 역할과 사용 시점에 대해 더 자세히 설명해 드리겠습니다. 이 함수는 TanStack Query의 가장 핵심적이고 강력한 기능 중 하나입니다.

  invalidateQueries의 역할: "데이터 유효기간 만료시키기"


  가장 쉽게 비유하자면, invalidateQueries는 캐시된 데이터에 찍힌 '유통기한'을 강제로 만료시키는 역할을 합니다.


  TanStack Query는 useQuery로 가져온 데이터를 캐시(임시 저장소)에 저장하여 앱의 속도를 높입니다. 이때 각 데이터는 '신선한(fresh)' 상태에서 일정 시간이 지나면 '오래된(stale)'
  상태로 바뀝니다.

  invalidateQueries를 호출하면, 특정 데이터를 즉시 '오래된(stale)' 상태로 만들어 버립니다.


  데이터가 '오래된(stale)' 상태가 되고, 해당 데이터를 사용하는 useQuery가 화면에 활성화되어 있다면, TanStack Query는 즉시 백그라운드에서 해당 데이터를 다시 가져오는(re-fetch) 
  작업을 시작합니다.


  결론적으로 invalidateQueries는 "이 데이터는 이제 낡았으니, 즉시 새로고침 해줘!" 라고 TanStack Query에게 명령하는 스위치입니다.

  ---

  invalidateQueries는 언제 사용하는가?


  invalidateQueries가 가장 흔하고 중요하게 사용되는 시점은 바로 데이터를 변경하는 작업(`useMutation`)이 성공한 직후입니다.

  아래에 사용자가 요청한 반려동물 앱의 시나리오로 예를 들어보겠습니다.

  시나리오: 새 반려동물 등록 후 목록 자동 새로고침


   1. 데이터 조회 (`useQuery`):
       * PetList.vue 페이지는 useQuery({ queryKey: ['pets'], ... })를 사용해서 서버로부터 내 반려동물 목록을 가져와 화면에 보여주고 있습니다.
       * 이 데이터는 ['pets']라는 queryKey로 캐시에 저장됩니다.


   2. 데이터 변경 (`useMutation`):
       * 사용자가 PetAdd.vue 페이지로 이동해서 '멍뭉이'라는 새 반려동물을 등록합니다.
       * 이 등록 로직은 useMutation으로 처리되고, 서버에 성공적으로 '멍뭉이'가 추가됩니다.


   3. 문제 발생:
       * 서버 DB에는 '멍뭉이'가 추가되었지만, PetList.vue가 알고 있는 ['pets'] 캐시 데이터에는 아직 '멍뭉이'가 없습니다.
       * 사용자가 목록 페이지로 돌아가도 '멍뭉이'가 보이지 않습니다. 페이지를 새로고침해야만 보일 겁니다. 이것은 나쁜 사용자 경험입니다.


   4. 해결책 (`invalidateQueries`):
       * 이때 useMutation의 onSuccess 콜백(뮤테이션이 성공했을 때 실행되는 함수)에서 queryClient.invalidateQueries({ queryKey: ['pets'] })를 호출합니다.



    1     const queryClient = useQueryClient()
    2
    3     const addPetMutation = useMutation({
    4       mutationFn: addPetAPI, // '멍뭉이'를 서버에 추가하는 API 함수
    5       onSuccess: () => {
    6         // 뮤테이션 성공 시!
    7         // ['pets']라는 키를 가진 모든 쿼리를 '만료'시킨다.
    8         queryClient.invalidateQueries({ queryKey: ['pets'] })
    9         console.log('반려동물 목록 쿼리를 무효화했습니다. 곧 데이터가 새로고침됩니다.')
   10       },
   11     })



   5. 결과:
       * addPetMutation이 성공하면 onSuccess가 실행됩니다.
       * invalidateQueries({ queryKey: ['pets'] })가 ['pets'] 쿼리를 '오래된(stale)' 상태로 만듭니다.
       * TanStack Query는 ['pets'] 쿼리가 '오래된' 것을 감지하고, PetList.vue가 이 데이터를 사용하고 있으므로, 즉시 백그라운드에서 반려동물 목록을 다시 가져옵니다.
       * 새로 가져온 목록에는 '멍뭉이'가 포함되어 있고, 사용자가 아무런 추가 행동을 하지 않아도 `PetList.vue` 화면이 자동으로 업데이트됩니다.


  다른 사용 사례


   * 수동 새로고침: 사용자가 직접 누르는 '새로고침' 버튼의 클릭 이벤트 핸들러에 invalidateQueries를 연결하여 데이터를 강제로 다시 불러올 수 있습니다.
   * 실시간 업데이트: 웹소켓 등으로부터 데이터가 변경되었다는 메시지를 받았을 때, invalidateQueries를 호출하여 화면을 최신 상태로 동기화할 수 있습니다.

  요약


  invalidateQueries는 데이터를 쓰는 작업(C/U/D)과 데이터를 읽는 작업(R)을 연결하는 가장 중요한 다리입니다. 데이터에 변경이 생겼을 때, 관련된 데이터들을 똑똑하게 자동으로
  새로고침하게 만드는 핵심적인 역할을 수행합니다.