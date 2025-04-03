<script lang="ts" generics="T">
    import type { FullAutoFill, HTMLInputAttributes } from "svelte/elements";

    type Props<T> = {
        id: string;
        label: string;
        value: T;
        invalidMsg: string;
        pattern?: RegExp;
        formatter?: (value: T) => T; // Форматирование значения
        type: HTMLInputAttributes["type"];
        required: boolean;
        placeholder?: string;
        autocomplete?: FullAutoFill;
        'data-valid'?: boolean;
    };

    let input: HTMLInputElement;
    let valid = $state(true);

    function validate() {
        const isFilled = !!input.value.trim().length;
        const isPatternValid = pattern ? pattern.test(input.value) : true;
        valid = isFilled && isPatternValid;
    }

    let { id, label, value = $bindable(), formatter, pattern, type, invalidMsg, required, placeholder, autocomplete }: Props<T> = $props();

    function handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        if (formatter) {
            value = formatter(target.value as T); 
        }
        validate(); 
    }
</script>

<div class="flex flex-col">
    <label class="" for={id}>
        {label}
        {#if required}<span class="text-red-500">*</span>{/if}
    </label>
    <input 
        class="data-[valid=false]:border-red-500 border p-2 w-full rounded peer data-[valid=false]:mb-0 mb-6"  
        bind:this={input} 
        bind:value 
        {id} 
        {placeholder}
        {autocomplete}
        pattern={pattern?.source} 
        {type}
        onblur={validate} 
        oninput={handleInput} 
        data-valid={valid}
        {required}
    />
    {#if !valid}
        <span class="h-6 text-red-500 text-sm">
            {!input.value.trim().length ? "Обязательно к заполнению." : invalidMsg}
        </span>
    {/if}
</div>