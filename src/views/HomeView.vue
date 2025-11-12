<template>
  <section class="flex flex-col">
    <section class="m-4 flex flex-col text-white items-center justify-center gap-y-5">
      <h1 class="text-3xl">Explora las Islas Galápagos</h1>
      <h2 class="text-xl w-2/3 text-pretty text-center">
        Reserva tu viaje en ferry entre las islas más hermosas del mundo. Conectamos Santa Cruz, San
        Cristóbal e Isabela.
      </h2>
      <h3 class="text-lg">3 Islas Principales Salidas Diarias Cómodo y Seguro</h3>
    </section>
    <section class="m-4">
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col p-7 rounded-2xl w-full border border-gray-200 shadow-xl bg-white"
      >
        <div class="mb-4">
          <div class="flex gap-4">
            <BaseRadio
              v-model="ticketType"
              v-bind="ticketTypeAttrs"
              name="ticketType"
              value="one_way"
              label="Sola ida"
            />
            <BaseRadio
              v-model="ticketType"
              v-bind="ticketTypeAttrs"
              name="ticketType"
              value="round_trip"
              label="Ida y vuelta"
            />
          </div>
          <span v-if="errors.ticketType" class="text-secondary text-sm"
            >{{ errors.ticketType }} +1</span
          >
        </div>

        <div class="mb-4">
          <div class="flex justify-between gap-10">
            <BaseSelect
              class="w-1/3"
              v-model="from"
              v-bind="fromAttrs"
              :options="fromOptions"
              placeholder="Selecciona isla"
              :error="errors.from"
            />

            <template v-if="values.ticketType === 'round_trip'">
              <BaseIconButton @click-me="clickMe">
                <SwitchHorizontalIcon />
              </BaseIconButton>

              <BaseSelect
                class="w-1/3"
                v-model="to"
                v-bind="toAttrs"
                :options="toOptions"
                placeholder="Selecciona isla"
                :error="errors.to"
              />
            </template>
          </div>
        </div>

        <div class="mb-4">
          <BaseInput
            class="w-1/2"
            type="date"
            v-model="departureDate"
            v-bind="departureDateAttrs"
            :error="errors.departureDate"
            :min="new Date().toISOString().split('T')[0]"
          />
        </div>

        <div class="mb-4">
          <BaseSelect
            v-model="numberPassengers"
            v-bind="numberPassengersAttrs"
            :options="[
              { label: '1 pasajero', value: 1 },
              { label: '2 pasajero', value: 2 },
              { label: '3 pasajero', value: 3 },
            ]"
            :error="errors.numberPassengers"
          >
            <UsersIcon class="w-5 h-5"
          /></BaseSelect>
        </div>

        <div class="my-4 flex">
          <BaseButton class="w-full" type="submit">Buscar Ferrys</BaseButton>
        </div>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseIconButton from '@/components/BaseIconButton.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseRadio from '@/components/BaseRadio.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import SwitchHorizontalIcon from '@/icons/SwitchHorizontalIcon.vue';
import UsersIcon from '@/icons/UsersIcon.vue';
import { useForm } from 'vee-validate';
import { computed, watch } from 'vue';
import * as yup from 'yup';

interface FormValues {
  ticketType: 'one_way' | 'round_trip';
  from: string;
  to: string;
  departureDate: string;
  numberPassengers: number;
}

const validationSchema = yup.object({
  ticketType: yup.string().required().oneOf(['one_way', 'round_trip']),
  from: yup.string().required(),
  to: yup.string().when('ticketType', {
    is: 'round_trip',
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.notRequired(),
  }),
  departureDate: yup.date().required(),
  numberPassengers: yup.number().required(),
});

const { values, errors, handleSubmit, defineField, setFieldValue } = useForm<FormValues>({
  validationSchema,
  initialValues: {
    ticketType: 'one_way',
  },
});

const [ticketType, ticketTypeAttrs] = defineField('ticketType');
const [from, fromAttrs] = defineField('from');
const [to, toAttrs] = defineField('to');
const [departureDate, departureDateAttrs] = defineField('departureDate');
const [numberPassengers, numberPassengersAttrs] = defineField('numberPassengers');

const islandsOptions = [
  { label: { title: 'Santa Cruz', subtitle: 'Santa Cruz' }, value: 'santa_cruz' },
  { label: 'San Cristóbal', value: 'san_cristobal' },
  { label: 'Isabela', value: 'isabela' },
];

const fromOptions = computed(() => {
  return islandsOptions.map((option) => {
    return {
      ...option,
      disabled: option.value === to.value,
    };
  });
});

const toOptions = computed(() => {
  return islandsOptions.map((option) => {
    return {
      ...option,
      disabled: option.value === from.value,
    };
  });
});

const onSubmit = handleSubmit((values) => {
  console.log({ values });
});

const clickMe = () => {
  console.log('clickMe transfer');
  const tempFrom = from.value;
  const tempTo = to.value;
  setFieldValue('from', tempTo);
  setFieldValue('to', tempFrom);
};

watch(ticketType, (newValue, oldValue) => {
  console.log('ticketType changed:', { newValue, oldValue });
  if (newValue === 'one_way') {
    setFieldValue('to', '');
  }
});
</script>
