import Address from 'js/addressService.js'

export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue: -1,
            districtValue: -1,
            address: '',
            id: '',
            type: '',
            isDefault: false,
            instance: '',
            addressData: require('js/address.json'),
            cityList: null,
            districtList:null,
        }
    },
    computed: {
        lists() {
          return this.$store.state.lists
      }  
    },
    created() {
        let query = this.$route.query
        this.type = query.type
        this.instance = query.instance

        if (this.type === 'edit') {
            let address = this.instance
            this.name = address.name
            this.tel = address.tel
            this.address = address.address
            this.provinceValue = parseInt(address.provinceValue)
            this.id = address.id
            this.isDefault = address.isDefault
        }
    },
    watch: {
        lists: {
            handler: function () {
              this.$router.go(-1)
            },
            deep: true
        },
        provinceValue(val) {
            if (val == -1) return
            let index = this.addressData.list.findIndex(item => {
                return val === item.value
            })
            this.cityList = this.addressData.list[index].children
            this.cityValue = -1
            this.districtValue = -1
            if (this.type === 'edit') {
                this.cityValue = parseInt(this.instance.cityValue)
            }
        },
        cityValue(val) {
            if (val == -1) return
            let index = this.cityList.findIndex(item => {
              return val === item.value
            })
            this.districtList = this.cityList[index].children
            this.districtValue = -1
            if (this.type === 'edit') {
              this.districtValue = parseInt(this.instance.districtValue)
            }
        }
    },
    methods: {
        add() {
            let { name, tel, provinceValue, cityValue, districtValue, address,id,isDefault} = this
            let data = { name, tel, provinceValue, cityValue, districtValue, address,id,isDefault}
            if (this.type === 'add') {
                // Address.add(data).then(res => {
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('addAction',data)
            } else {
                // Address.update(data).then(res => {
                //   this.$router.go(-1)
                // })
                this.$store.dispatch('updateAction',data)
            }
        },
        remove() {
            if (window.confirm('确认删除该地址吗？')) {
                // Address.remove(this.id).then(res => {
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('removeAction',this.id)
            }
        },
        setDefault() {
            // Address.setDefault(this.id).then(res => {
            //   this.$router.go(-1)
            // })
            this.$store.dispatch('setDefaultAction',this.id)
        }
    }
}