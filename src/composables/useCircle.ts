import { ref, onMounted } from "vue";

export function useCircle() {
  const nbrCircle = ref(10);
  const borderCircle = 2;

  onMounted(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const rayonCircle = 10;
    const denominator = rayonCircle + borderCircle * 2;

    const nbrCircleHeight = Math.floor(height / denominator);
    const nbrCircleWidth = Math.floor(width / denominator);
    nbrCircle.value = nbrCircleHeight * nbrCircleWidth;
  });

  return { nbrCircle };
}
