<template>
  <div class="card">
    <h2>Product List</h2>

    <ul class="product-list">
      <li class="product-item" data-id="101">
        <span class="name">Laptop</span>
        <span class="price">$1200</span>
      </li>

      <li class="product-item" data-id="102">
        <span class="name">Keyboard</span>
        <span class="price">$50</span>
      </li>

      <li class="product-item" data-id="103">
        <span class="name">Mouse</span>
        <span class="price">$25</span>
      </li>
    </ul>

    <button class="add-btn">Add Product</button>
  </div>
</template>

<script>
export default {
  name: "MidElement"
};
</script>
