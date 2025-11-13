<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col p-7 rounded-2xl w-full border border-gray-200 shadow-xl bg-white"
  >
    <div class="mb-4">
      <div class="flex gap-4">
        <BaseRadio
          v-for="option in ticketTypeOptions"
          :key="option.value.toString()"
          v-model="ticketType"
          v-bind="ticketTypeAttrs"
          :name="option.name"
          :value="option.value"
          :label="option.label"
        />
      </div>
      <span v-if="errors.ticketType" class="text-secondary text-sm"
        >{{ errors.ticketType }} +1</span
      >
    </div>

    <div class="mb-4">
      <div class="flex justify-between items-center gap-10">
        <BaseSelect
          class="w-1/3"
          v-model="from"
          v-bind="fromAttrs"
          :options="fromOptions"
          placeholder="Selecciona isla"
          :error="errors.from"
          label="Desde"
        />

        <BaseButton circle @click-me="clickMe">
          <SwitchHorizontalIcon />
        </BaseButton>

        <BaseSelect
          class="w-1/3"
          v-model="to"
          v-bind="toAttrs"
          :options="toOptions"
          placeholder="Selecciona isla"
          :error="errors.to"
          label="Hacia"
        />
      </div>
    </div>

    <div class="mb-4">
      <div class="flex justify-between items-center gap-10">
        <BaseInput
          class="w-1/2"
          type="date"
          v-model="departureDate"
          v-bind="departureDateAttrs"
          :error="errors.departureDate"
          :min="initialDate"
          label="Fecha de salida"
        />
        <BaseInput
          v-if="values.ticketType === 'round_trip'"
          class="w-1/2"
          type="date"
          v-model="returnDate"
          v-bind="returnDateAttrs"
          :error="errors.returnDate"
          :min="departureDate ? departureDate : initialDate"
          label="Fecha de regreso"
        />
      </div>
    </div>

    <div class="mb-4">
      <BaseSelect
        label="Pasajeros"
        v-model="numberPassengers"
        v-bind="numberPassengersAttrs"
        :options="passengersOptions"
        :error="errors.numberPassengers"
      >
        <UsersIcon class="w-5 h-5"
      /></BaseSelect>
    </div>

    <div class="my-4 flex">
      <BaseButton class="w-full" type="submit">Buscar Ferrys</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '@/shared/components/commons/BaseButton.vue';
import BaseInput from '@/shared/components/commons/BaseInput.vue';
import BaseRadio from '@/shared/components/commons/BaseRadio.vue';
import BaseSelect from '@/shared/components/commons/BaseSelect.vue';
import SwitchHorizontalIcon from '@/shared/components/icons/SwitchHorizontalIcon.vue';
import UsersIcon from '@/shared/components/icons/UsersIcon.vue';
import { useForm } from 'vee-validate';
import { computed, watch, type Ref } from 'vue';
import * as yup from 'yup';
import type { FerrySearchFormValues } from '../interfaces';
import type { BaseRadioProps, SelectOption } from '@/shared/interfaces';
import dayjs from 'dayjs';

const initialDate = dayjs().add(1, 'day').format('YYYY-MM-DD');

const validationSchema = yup.object({
  ticketType: yup.string().required().oneOf(['one_way', 'round_trip']),
  from: yup.string().required(),
  to: yup.string().required(),
  departureDate: yup.date().required(),
  returnDate: yup.string().when('ticketType', {
    is: 'round_trip',
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.notRequired(),
  }),
  numberPassengers: yup.number().required(),
});

const emit = defineEmits<{
  submit: [values: FerrySearchFormValues];
}>();

const { values, errors, handleSubmit, defineField, setFieldValue, resetField } =
  useForm<FerrySearchFormValues>({
    validationSchema,
    initialValues: {
      ticketType: 'one_way',
    },
  });

const [ticketType, ticketTypeAttrs] = defineField('ticketType');
const [from, fromAttrs] = defineField('from');
const [to, toAttrs] = defineField('to');
const [departureDate, departureDateAttrs] = defineField('departureDate'); // salida
const [returnDate, returnDateAttrs] = defineField('returnDate'); // regreso
const [numberPassengers, numberPassengersAttrs] = defineField('numberPassengers');

const ticketTypeOptions: BaseRadioProps[] = [
  { name: 'ticketType', label: 'Sola ida', value: 'one_way' },
  { name: 'ticketType', label: 'Ida y vuelta', value: 'round_trip' },
];

const passengersOptions: SelectOption[] = [
  { label: '1 pasajero', value: 1 },
  { label: '2 pasajeros', value: 2 },
  { label: '3 pasajeros', value: 3 },
];

const islandsOptions: SelectOption[] = [
  { label: 'Santa Cruz (Puerto Ayora)', value: 'santa_cruz' },
  {
    label: 'San Cristóbal (Puerto Baquerizo Moreno)',
    value: 'san_cristobal',
  },
  { label: 'Isabela (Puerto Villamil)', value: 'isabela' },
];

const islandsOptionsTransfer = (field: Ref<string, string>) => {
  return islandsOptions.map((option) => {
    return {
      ...option,
      disabled: option.value === field.value,
    };
  });
};

const fromOptions = computed(() => {
  return islandsOptionsTransfer(to);
});

const toOptions = computed(() => {
  return islandsOptionsTransfer(from);
});

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
});

const clickMe = () => {
  const tempFrom = from.value;
  const tempTo = to.value;
  setFieldValue('from', tempTo);
  setFieldValue('to', tempFrom);
};

watch(departureDate, (newValue, oldValue) => {
  console.log('departureDate changed:', { newValue, oldValue });
  if (newValue) {
    resetField('returnDate');
  }
});
</script>
