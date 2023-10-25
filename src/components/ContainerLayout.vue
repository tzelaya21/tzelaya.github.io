<template>
  <div class="container">
		<slot/>
	</div>
</template>

<style>
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	@media (max-width: 992px) {
		.container {
			padding: 0 1rem;
		}
	}
</style>
