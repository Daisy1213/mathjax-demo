<style scoped lang="less">
.auto-answer-500 {
  list-style-type: none;
  counter-reset: sectioncounter;

  .tip {
    color: #909090;
    font-size: 24px;
    margin-bottom: 24px;
  }

  .tag-content {
    display: flex;
    margin-bottom: 36px;

    .tag-item {
      border: 1px solid #F4F4F4;
      color: #272727;
      background-color: #F4F4F4;
      border-radius: 12px;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 32px;
      width: 140px;
      height: 56px;

      &.isSelected {
        border: 1px solid #3D94FF;
        background: rgba(61, 148, 255, 0.1);
        color: #3D94FF;
      }
    }
  }

  .latex-answer-steps {
    display: inline-block;
    margin-bottom: 46px;
    vertical-align: top;
    margin-right: 50px;
    max-width: 100%;
    position: relative;

    &:before {
      content: counter(sectioncounter);
      counter-increment: sectioncounter;
      color: #272727;
      display: inline-block;
      border-radius: 50px;
      font-size: 26px;
      border: 1px solid #272727;
      width: 36px;
      height: 36px;
      text-align: center;
      position: absolute;
      left: 0;
    }
  }

  .latex-answer-step {
    padding-bottom: 8px;
    margin-left: 46px;
  }
}
</style>

<template>
  <div class="auto-answer-500" id="test">
    <div class="latex-contents">
      <div class="latex-answer-steps" v-for="(item, index) in latexContents" :key="index">
        <div class="latex-answer-step" v-for="(step, stepIndex) in item" :key="stepIndex">{{ step }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component'

@Component()
export default class Auto500 {
  latexContents = []

  mounted () {
    // 延时模拟数据请求
    setTimeout(() => {
      this.latexContents = [
        [
          '$\\quad\\frac{18}{31}-\\frac{10}{31}$',
          '$=\\frac{18-10}{31}$',
          '$=\\frac{8}{31}$',
        ],
        [
          '$\\quad\\frac{9}{19}+\\frac{4}{19}$',
          '$=\\frac{9+4}{19}$',
          '$=\\frac{13}{19}$',
        ],
        [
          '$\\quad\\frac{19}{37}+\\frac{4}{31}$',
          '$=\\frac{19\\times 31}{37\\times 31}+\\frac{4\\times 37}{31\\times 37}$',
          '$=\\frac{589}{1147}+\\frac{148}{1147}$',
          '$=\\frac{589+148}{1147}$',
          '$=\\frac{737}{1147}$',
        ],
        [
          '$\\quad\\frac{13}{23}-\\frac{5}{23}$',
          '$=\\frac{13-5}{23}$',
          '$=\\frac{8}{23}$',
        ],
        [
          '$\\quad\\frac{4}{5}-\\frac{2}{5}$',
          '$=\\frac{4-2}{5}$',
          '$=\\frac{2}{5}$',
        ],
        [
          '$\\quad\\frac{6}{12}+\\frac{7}{26}$',
          '$=\\frac{1}{2}+\\frac{7}{26}$',
          '$=\\frac{1\\times 13}{2\\times 13}+\\frac{7}{26}$',
          '$=\\frac{13}{26}+\\frac{7}{26}$',
          '$=\\frac{13+7}{26}$',
          '$=\\frac{20}{26}$',
          '$=\\frac{10}{13}$',
        ],
        [
          '$\\quad\\frac{7}{24}+\\frac{5}{24}$',
          '$=\\frac{7+5}{24}$',
          '$=\\frac{12}{24}$',
          '$=\\frac{1}{2}$',
        ],
        [
          '$\\quad\\frac{7}{26}+\\frac{5}{24}$',
          '$=\\frac{7\\times 12}{26\\times 12}+\\frac{5\\times 13}{24\\times 13}$',
          '$=\\frac{84}{312}+\\frac{65}{312}$',
          '$=\\frac{84+65}{312}$',
          '$=\\frac{149}{312}$',
        ],
        [
          '$\\quad\\frac{5}{24}+\\frac{3}{8}$',
          '$=\\frac{5}{24}+\\frac{3\\times 3}{8\\times 3}$',
          '$=\\frac{5}{24}+\\frac{9}{24}$',
          '$=\\frac{5+9}{24}$',
          '$=\\frac{14}{24}$',
          '$=\\frac{7}{12}$',
        ],
        [
          '$\\quad\\frac{15}{21}+\\frac{11}{31}$',
          '$=\\frac{5}{7}+\\frac{11}{31}$',
          '$=\\frac{5\\times 31}{7\\times 31}+\\frac{11\\times 7}{31\\times 7}$',
          '$=\\frac{155}{217}+\\frac{77}{217}$',
          '$=\\frac{155+77}{217}$',
          '$=\\frac{232}{217}$',
          '$=1\\frac{15}{217}$',
        ],
        [
          '$\\quad\\frac{5}{37}+\\frac{12}{31}$',
          '$=\\frac{5\\times 31}{37\\times 31}+\\frac{12\\times 37}{31\\times 37}$',
          '$=\\frac{155}{1147}+\\frac{444}{1147}$',
          '$=\\frac{155+444}{1147}$',
          '$=\\frac{599}{1147}$',
        ],
        [
          '$\\quad\\frac{1}{31}+\\frac{13}{31}$',
          '$=\\frac{1+13}{31}$',
          '$=\\frac{14}{31}$',
        ],
        [
          '$\\quad\\frac{2}{11}+\\frac{6}{11}$',
          '$=\\frac{2+6}{11}$',
          '$=\\frac{8}{11}$',
        ],
        [
          '$\\quad\\frac{2}{21}\\div \\frac{1}{21}$',
          '$=\\frac{2}{21}\\times 21$',
          '$=2\\times 1$',
          '$=2$',
        ],
        [
          '$\\quad\\frac{1}{3}+\\frac{1}{3}$',
          '$=\\frac{1+1}{3}$',
          '$=\\frac{2}{3}$',
        ],
        [
          '$\\quad\\frac{4}{5}+\\frac{1}{2}$',
          '$=\\frac{4\\times 2}{5\\times 2}+\\frac{1\\times 5}{2\\times 5}$',
          '$=\\frac{8}{10}+\\frac{5}{10}$',
          '$=\\frac{8+5}{10}$',
          '$=\\frac{13}{10}$',
          '$=1\\frac{3}{10}$',
        ],
        [
          '$\\quad\\frac{13}{10}-\\frac{1}{6}$',
          '$=\\frac{13\\times 3}{10\\times 3}-\\frac{1\\times 5}{6\\times 5}$',
          '$=\\frac{39}{30}-\\frac{5}{30}$',
          '$=\\frac{39-5}{30}$',
          '$=\\frac{34}{30}$',
          '$=\\frac{17}{15}$',
          '$=1\\frac{2}{15}$',
        ],
        [
          '$\\quad\\frac{8}{25}-\\frac{3}{15}$',
          '$=\\frac{8}{25}-\\frac{1}{5}$',
          '$=\\frac{8}{25}-\\frac{1\\times 5}{5\\times 5}$',
          '$=\\frac{8}{25}-\\frac{5}{25}$',
          '$=\\frac{8-5}{25}$',
          '$=\\frac{3}{25}$',
        ],
        [
          '$\\quad\\frac{2}{21}+\\frac{4}{21}$',
          '$=\\frac{2+4}{21}$',
          '$=\\frac{6}{21}$',
          '$=\\frac{2}{7}$',
        ],
        [
          '$\\quad\\frac{1}{34}+\\frac{5}{14}$',
          '$=\\frac{1\\times 7}{34\\times 7}+\\frac{5\\times 17}{14\\times 17}$',
          '$=\\frac{7}{238}+\\frac{85}{238}$',
          '$=\\frac{7+85}{238}$',
          '$=\\frac{92}{238}$',
          '$=\\frac{46}{119}$',
        ],
        [
          '$\\quad\\frac{3}{20}+\\frac{1}{20}$',
          '$=\\frac{3+1}{20}$',
          '$=\\frac{4}{20}$',
          '$=\\frac{1}{5}$',
        ],
        [
          '$\\quad\\frac{1}{25}+\\frac{10}{23}$',
          '$=\\frac{1\\times 23}{25\\times 23}+\\frac{10\\times 25}{23\\times 25}$',
          '$=\\frac{23}{575}+\\frac{250}{575}$',
          '$=\\frac{23+250}{575}$',
          '$=\\frac{273}{575}$',
        ],
        [
          '$\\quad\\frac{6}{11}+\\frac{4}{11}$',
          '$=\\frac{6+4}{11}$',
          '$=\\frac{10}{11}$',
        ],
        [
          '$\\quad\\frac{7}{11}+\\frac{5}{22}$',
          '$=\\frac{7\\times 2}{11\\times 2}+\\frac{5}{22}$',
          '$=\\frac{14}{22}+\\frac{5}{22}$',
          '$=\\frac{14+5}{22}$',
          '$=\\frac{19}{22}$',
        ],
        [
          '$\\quad\\frac{5}{8}-\\frac{5}{12}$',
          '$=\\frac{5\\times 3}{8\\times 3}-\\frac{5\\times 2}{12\\times 2}$',
          '$=\\frac{15}{24}-\\frac{10}{24}$',
          '$=\\frac{15-10}{24}$',
          '$=\\frac{5}{24}$',
        ],
        [
          '$\\quad\\frac{9}{16}-\\frac{3}{36}$',
          '$=\\frac{9}{16}-\\frac{1}{12}$',
          '$=\\frac{9\\times 3}{16\\times 3}-\\frac{1\\times 4}{12\\times 4}$',
          '$=\\frac{27}{48}-\\frac{4}{48}$',
          '$=\\frac{27-4}{48}$',
          '$=\\frac{23}{48}$',
        ],
        [
          '$\\quad\\frac{1}{23}-\\frac{5}{23}$',
          '$=\\frac{1-5}{23}$',
          '$=-\\frac{4}{23}$',
        ],
        [
          '$\\quad\\frac{7}{22}+\\frac{4}{26}$',
          '$=\\frac{7}{22}+\\frac{2}{13}$',
          '$=\\frac{7\\times 13}{22\\times 13}+\\frac{2\\times 22}{13\\times 22}$',
          '$=\\frac{91}{286}+\\frac{44}{286}$',
          '$=\\frac{91+44}{286}$',
          '$=\\frac{135}{286}$',
        ],
        [
          '$\\quad\\frac{1}{30}\\div \\frac{13}{36}$',
          '$=\\frac{1}{30}\\times \\frac{36}{13}$',
          '$=\\frac{1}{5}\\times \\frac{6}{13}$',
          '$=\\frac{1\\times 6}{5\\times 13}$',
          '$=\\frac{6}{65}$',
        ],
        [
          '$\\quad\\frac{7}{34}+\\frac{3}{24}$',
          '$=\\frac{7}{34}+\\frac{1}{8}$',
          '$=\\frac{7\\times 4}{34\\times 4}+\\frac{1\\times 17}{8\\times 17}$',
          '$=\\frac{28}{136}+\\frac{17}{136}$',
          '$=\\frac{28+17}{136}$',
          '$=\\frac{45}{136}$',
        ],
        [
          '$\\quad\\frac{2}{3}-\\frac{11}{27}$',
          '$=\\frac{2\\times 9}{3\\times 9}-\\frac{11}{27}$',
          '$=\\frac{18}{27}-\\frac{11}{27}$',
          '$=\\frac{18-11}{27}$',
          '$=\\frac{7}{27}$',
        ],
      ]
      this.$nextTick(() => {
        const dom = document.getElementById('test')
        console.log(window.MathJax, 'xxx')
        window.MathJax.typesetPromise([dom]).then(() => {
          requestAnimationFrame(() => {
            console.log('第一次')
            requestAnimationFrame(() => {
              console.log('第二次')
              document.fonts.ready.then(() => {
                alert('xxx')
              })
              requestAnimationFrame(() => {
                console.log('第三次')
              })
            })
          })
        }).catch((err) => {
          console.log('errr', err)
        })
      })
    }, 300)
  }
}
</script>
