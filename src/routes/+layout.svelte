<script lang="ts">
	import Navbar from "$lib/component/navbar.svelte";
	import Footer from "$lib/component/footer.svelte";
	import "../app.css";
</script>

<Navbar />
<div class="px-5">
	<slot />
</div>
<Footer />
