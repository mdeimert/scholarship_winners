<template>
  <DataTable
    :value="winners"
    :lazy="true"
    :paginator="true"
    :first="(currentPage - 1) * rowsPerPage"
    :rows="rowsPerPage"
    :totalRecords="totalRecords"
    :loading="pending"
    dataKey="id"
    showGridlines
    @page="onPage"
  >
    <template #empty>No winners found.</template>
    <template #loading>Loading winner data. Please wait.</template>
    <Column field="attributes.winnerName" header="Name" />
    <Column field="attributes.amountWon" header="Amount Won">
      <template #body="{ data }">
        {{ formatCurrency(data.attributes.amountWon) }}
      </template>
    </Column>
    <Column field="attributes.wonAt" header="Date Won">
      <template #body="{ data }">
        {{ new Date(data.attributes.wonAt).toLocaleDateString() }}
      </template>
    </Column>
    <Column header="Photo">
      <template #body="{ data }">
        <WinnerPhoto :photo="data.attributes.winnerPhoto" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentPage = ref(Number(route.query.page) || 1);
const rowsPerPage = 10;
const { $api } = useNuxtApp();

const { data, pending } = await useAsyncData(
  'winners',
  () => $api.winner.fetch(currentPage.value),
  { watch: [currentPage] },
);

const winners = computed(() => data.value?.winners ?? []);
const totalRecords = computed(() => data.value?.meta?.page?.total ?? 100);

const onPage = (event: any) => {
  const newPage = event.page + 1;
  currentPage.value = newPage;
  router.replace({ query: { ...route.query, page: newPage } });
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
</script>
