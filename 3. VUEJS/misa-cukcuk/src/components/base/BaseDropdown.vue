<template lang="">
	<label @blur="hideDropdown()" @click="toggleDropdown()" tabindex="4" class="dropdown table-filter__department" for="dropdown-input">
		<div class="dropdown-header-wrapper">
			<span class="dropdown-value filter__value--department">
				{{ dropdownBindVal }}
			</span>
			<i class="fas fa-chevron-down icon-down"></i>
		</div>
		<ul class="dropdown-list filter__list--department" :style="{display: dropdownShow}">
			<li @click="itemClick(index)" v-for="(item, index) in dropdownData" v-bind:class="{active: (index == currIdx)}" :key="index" class="dropdown-item">
                {{item[dropdownName + 'Name']}}
			</li>
		</ul>
	</label>
</template>
<script>
    import axios from 'axios'
    import {EventBus} from '../../main'
	export default {
		name: "BaseDropdown",
		props: {
            APIurl: {type: String, default: ''},
            dropdownName: String
		},
		data() {
			return {	
                dropdownState: false,
                currIdx: 0,
                dropdownData: [],
                gotData: false
			};
		},
        created() {
            axios.get(this.APIurl)
                .then((res) => {
                    this.dropdownData = res.data;
                    this.gotData = true;
                })
                .catch((res) => {
                    console.log(res);
                });
        },
        methods: {
            toggleDropdown() {
                this.dropdownState = !this.dropdownState;
            },
            hideDropdown() {
                this.dropdownState = false;
            },
            itemClick(index) {
                this.currIdx = index;
                EventBus.$emit('itemClick', this.dropdownData[this.currIdx][this.dropdownName + 'Name']);
            } 
        },
        computed: {
            dropdownShow() {
                if (this.dropdownState) {
                    return 'block';
                } else {
                    return 'none';
                }
            }, 
            dropdownBindVal() {
                if(this.gotData) {
                    return this.dropdownData[this.currIdx][this.dropdownName + 'Name'];
                } else {
                    return '';
                }
            }
        }
	};
</script>
<style lang=""></style>
