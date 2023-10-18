import FormSelectField, { SelectOptions } from "./FormSelectField";

const DistrictField = () => {
    const districtsArray = [
        'BAGERHAT',
        'BANDARBAN',
        'BARGUNA',
        'BARISAL',
        'BHOLA',
        'BOGRA',
        'BRAHMANBARIA',
        'CHANDPUR',
        'CHAPAINAWABGANJ',
        'CHITTAGONG',
        'CHUADANGA',
        'COMILLA',
        'COXS_BAZAR',
        'DHAKA',
        'DINAJPUR',
        'FARIDPUR',
        'FENI',
        'GAIBANDHA',
        'GAZIPUR',
        'GOPALGANJ',
        'HABIGANJ',
        'JAMALPUR',
        'JESSORE',
        'JHALOKATI',
        'JHENAIDAH',
        'JOYPURHAT',
        'KHAGRACHARI',
        'KHULNA',
        'KISHOREGANJ',
        'KURIGRAM',
        'KUSHTIA',
        'LAKSHMIPUR',
        'LALMONIRHAT',
        'MADARIPUR',
        'MAGURA',
        'MANIKGANJ',
        'MEHERPUR',
        'MOULVIBAZAR',
        'MUNSHIGANJ',
        'MYMENSINGH',
        'NAOGAON',
        'NARAIL',
        'NARAYANGANJ',
        'NARSINGDI',
        'NATORE',
        'NAWABGANJ',
        'NETROKONA',
        'NILPHAMARI',
        'NOAKHALI',
        'PABNA',
        'PANCHAGARH',
        'PATUAKHALI',
        'PIROJPUR',
        'RAJBARI',
        'RAJSHAHI',
        'RANGAMATI',
        'RANGPUR',
        'SATKHIRA',
        'SHARIATPUR',
        'SHERPUR',
        'SIRAJGANJ',
        'SUNAMGANJ',
        'SYLHET',
        'TANGAIL',
        'THAKURGAON'
      ];
      
  const districtOptions = districtsArray.map((district) => {
    return {
      label: district,
      value: district
    };
  });

  return (
    <FormSelectField
      name="district"
      label="district"
      options={districtOptions as SelectOptions[]}
    />
  );
};

export default DistrictField;
