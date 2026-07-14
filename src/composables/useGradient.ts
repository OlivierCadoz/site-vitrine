import { ref, computed, onMounted } from "vue";

const backgroundColor = ref("rgba(0,0,0,0.5)");
const circleColor = ref("rgba(0,0,0,0.2)");
const circleRadius = '6%';

export function useGradient() {
  const mousePosition = ref({ x: 0, y: 0 });

  const gradient = computed(
    () =>
      `radial-gradient(circle at ${mousePosition.value.x}px ${mousePosition.value.y}px, ${circleColor.value} ${circleRadius}, ${backgroundColor.value} ${circleRadius} )`,
  );

  const updateMousePosition = (ev: MouseEvent) => {
    mousePosition.value = { x: ev.clientX, y: ev.clientY };
  };

  const GradientPosition = () => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  };

  onMounted(() => {
    const removeMouseListener = GradientPosition();
    return () => removeMouseListener();
  });

  return { gradient };
}
