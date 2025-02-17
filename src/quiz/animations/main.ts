const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1: HTMLElement | null = document.querySelector("#alice1");
const alice2: HTMLElement | null = document.querySelector("#alice2");
const alice3: HTMLElement | null = document.querySelector("#alice3");

async function animate(): Promise<void> {
  try {
    if (alice1) {
      await alice1.animate(aliceTumbling1, aliceTiming1).finished;
    } else {
      console.warn("#alice1 not found");
    }

    if (alice2) {
      await alice2.animate(aliceTumbling1, aliceTiming1).finished;
    } else {
      console.warn("#alice2 not found");
    }

    if (alice3) {
      await alice3.animate(aliceTumbling1, aliceTiming1).finished;
    } else {
      console.warn("#alice3 not found");
    }
  } catch (err) {
    console.warn("#alice not found");
  }
}

window.addEventListener("load", animate);

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  