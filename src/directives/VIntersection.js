export default {
  name: "intersection",
  mounted(el, binding) {
    new IntersectionObserver(callback.bind(this), {
      rootMargin: "0px",
      threshold: 1.0,
    }).observe(el);

    function callback(entries) {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    }
  },
};
