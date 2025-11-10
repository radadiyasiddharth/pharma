import { useEffect, useState } from 'react';
import { Search, Package, Pill, Sparkles, ChevronDown, ChevronUp, Activity, Stethoscope, Eye, Syringe, FlaskConical, Leaf } from 'lucide-react';

const Products = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = 'Products - Optus Pharma';
  }, []);

  const productCategories = [
    {
      id: 1,
      title: 'Active Pharmaceutical Ingredients (APIs)',
      icon: FlaskConical,
      description: 'High-purity APIs manufactured under strict cGMP guidelines',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      products: [
        { name: 'Acyclovir Anhydrous', grade: 'EP/IP/USP', purity: '99%', applications: 'Antiviral medication' },
        { name: 'Albendazole', grade: 'IP/USP', purity: '≥99%', applications: 'Anti-parasitic medication' },
        { name: 'Artemether', grade: 'IP', purity: '≥99%', applications: 'Antimalarial medication' },
        { name: 'Ascorbic Acid (Vitamin C)', grade: 'IP', purity: '99%', applications: 'Vitamin supplementation' },
        { name: 'Atenolol', grade: 'IP/BP/USP', purity: '≥99%', applications: 'Beta-blocker for hypertension' },
        { name: 'Caffeine', grade: 'IP/BP/USP', purity: '99%', applications: 'Central nervous system stimulant' },
        { name: 'Carbocisteine', grade: 'IP/BP/USP', purity: '≥98%', applications: 'Mucolytic agent' },
        { name: 'Cefixime', grade: 'IP', purity: '99%', applications: 'Third-generation cephalosporin antibiotic' },
        { name: 'Chlorpheniramine Maleate', grade: 'IP', purity: '≥99%', applications: 'Antihistamine' },
        { name: 'Cholecalciferol (Vitamin D3)', grade: 'IP', purity: '≥99%', applications: 'Vitamin D supplementation' },
        { name: 'Cetirizine Dihydrochloride', grade: 'IP', purity: '≥98%', applications: 'Second-generation antihistamine' },
        { name: 'Clobetasole Propionate', grade: 'USP', purity: '≥98%', applications: 'Topical corticosteroid' },
        { name: 'Diclofenac Sodium', grade: 'IP', purity: '99%', applications: 'NSAID anti-inflammatory' },
        { name: 'Fenbendazole', grade: 'IP', purity: '≥98%', applications: 'Veterinary anthelmintic' },
        { name: 'Ibuprofen', grade: 'BP', purity: '≥99%', applications: 'NSAID pain reliever' },
        { name: 'Lactulose', grade: 'USP', purity: '≥98%', applications: 'Laxative and hepatic encephalopathy treatment' },
        { name: 'Lumefentrine', grade: 'USP', purity: '99%', applications: 'Antimalarial medication' },
        { name: 'Methylcobalamin (Vitamin B12)', grade: '', purity: '≥98%', applications: 'Vitamin B12 supplementation' },
        { name: 'Metronidazole Benzoate', grade: 'IP', purity: '99%', applications: 'Antiprotozoal and antibacterial' },
        { name: 'Miconazole Nitrate', grade: 'IP/BP/USP', purity: '≥99%', applications: 'Antifungal medication' },
        { name: 'Neomycin Sulphate', grade: 'IP', purity: '99%', applications: 'Aminoglycoside antibiotic' },
        { name: 'Nimesulide', grade: 'BP', purity: '≥99%', applications: 'NSAID anti-inflammatory' },
        { name: 'Ornidazole', grade: 'IP/BP/USP', purity: '≥98%', applications: 'Antiprotozoal and antibacterial' },
        { name: 'Paracetamol', grade: 'IP/BP', purity: '≥99%', applications: 'Analgesic and antipyretic' },
        { name: 'Phenylephrine HCL', grade: 'IP', purity: '≥99%', applications: 'Nasal decongestant' },
        { name: 'Povidone Iodine', grade: 'IP/BP/USP', purity: '≥99%', applications: 'Antiseptic and disinfectant' },
        { name: 'Pyridoxine HCL (Vit B6)', grade: 'IP/BP', purity: '≥99%', applications: 'Vitamin B6 supplementation' },
        { name: 'Racecadotril', grade: 'IP', purity: '≥99%', applications: 'Antidiarrheal medication' },
        { name: 'Riboflavin', grade: 'IP', purity: '≥99%', applications: 'Vitamin B2 supplementation' },
        { name: 'Simethicone 30%', grade: 'IP', purity: '≥99%', applications: 'Anti-foaming agent' },
        { name: 'Vitamin A Acetate', grade: 'IP', purity: '≥99%', applications: 'Vitamin A supplementation' },
        { name: 'Vitamin D2 (Ergocalciferol)', grade: 'IP', purity: '≥99%', applications: 'Vitamin D supplementation' }
      ]
    },
    {
      id: 2,
      title: 'Pharmaceutical Excipients',
      icon: Package,
      description: 'High-quality excipients for pharmaceutical formulations',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      products: [
        { name: 'Ammonium Chloride', applications: 'Expectorant and pH adjuster' },
        { name: 'Ammonium Sulphate', applications: 'Protein precipitation and crystallization' },
        { name: 'Bronopol', applications: 'Preservative for pharmaceutical formulations' },
        { name: 'Camphor', applications: 'Topical analgesic and antiseptic' },
        { name: 'Carbomer 940', applications: 'Thickening and gelling agent' },
        { name: 'Carboxymethyl Cellulose', applications: 'Binder and disintegrant' },
        { name: 'Citric Acid', applications: 'Acidulant and antioxidant' },
        { name: 'Colloidal Silicon Dioxide', applications: 'Anti-caking and flow aid agent' },
        { name: 'Crosscarmellose Sodium', applications: 'Super disintegrant' },
        { name: 'Crosspovidone', applications: 'Disintegrant for tablets' },
        { name: 'Glycerine IP', applications: 'Humectant and solvent' },
        { name: 'Glycerol', applications: 'Plasticizer and humectant' },
        { name: 'Glycin', applications: 'Buffering agent' },
        { name: 'Lactulose', applications: 'Sweetener and laxative' },
        { name: 'Light Liquid Paraffin', applications: 'Lubricant and emollient' },
        { name: 'Magnesium Citrate', applications: 'Laxative and dietary supplement' },
        { name: 'Maize Starch', applications: 'Binder and disintegrant' },
        { name: 'MCCP 101/102', applications: 'Direct compression filler' },
        { name: 'MCCP 112', applications: 'Tablet filler and binder' },
        { name: 'PEG 3350 Flakes', applications: 'Solvent and plasticizer' },
        { name: 'PEG 400', applications: 'Solvent and plasticizer' },
        { name: 'PEG 8000', applications: 'Coating agent and lubricant' },
        { name: 'Potassium Citrate', applications: 'Alkalizing agent' },
        { name: 'Propylene Glycol', applications: 'Solvent and humectant' },
        { name: 'Purified Talc', applications: 'Anti-adherent and glidant' },
        { name: 'Refined Glycerine IP', applications: 'Humectant and solvent' },
        { name: 'Sodium Benzoate', applications: 'Preservative' },
        { name: 'Sodium Citrate', applications: 'Buffering agent and emulsifier' },
        { name: 'Sodium Chloride', applications: 'Isotonic agent and preservative' },
        { name: 'Sorbitol 70%', applications: 'Sweetener and humectant' }
      ]
    },
    {
      id: 3,
      title: 'Injectable Products',
      icon: Syringe,
      description: 'Comprehensive range of sterile injectable formulations',
      color: 'bg-red-500',
      lightColor: 'bg-red-50',
      products: [
        { name: 'Propranolol', strength: '1mg/ml', category: 'Antihypertensive' },
        { name: 'Enalapril', strength: '1.25mg/ml', category: 'Antihypertensive' },
        { name: 'Esmolol', strength: '10mg/ml, 250mg/ml', category: 'Antihypertensive' },
        { name: 'Metoprolol', strength: '1mg/ml-5ml, 5mg/5ml', category: 'Antihypertensive' },
        { name: 'Clonidine', strength: '100mcg/ml, 150mcg/ml', category: 'Antihypertensive' },
        { name: 'Labetalol', strength: '100mg/20ml, 20mg/4ml', category: 'Antihypertensive' },
        { name: 'Sodium Nitroprusside', strength: '50mg/5ml', category: 'Antihypertensive' },
        { name: 'Protamine Sulphate', strength: '50mg/5ml', category: 'Coagulants' },
        { name: 'Aminocaproic', strength: '5gm/20ml, 250mg/ml', category: 'Coagulants' },
        { name: 'Aprotinin', strength: '100000KIU, 500000KIU', category: 'Coagulants' },
        { name: 'Etamsylate', strength: '250mg/2ml', category: 'Coagulants' },
        { name: 'Methyl Ergometrine', strength: '0.2mg/ml', category: 'Coagulants' },
        { name: 'Filgrastim Injection', strength: '300mcg/0.5ml', category: 'Coagulants' },
        { name: 'Furosemide Injection BP', strength: '10mg/ml', category: 'Diuretics' },
        { name: 'Torsemide', strength: '10mg/ml', category: 'Diuretics' },
        { name: 'Nicorandil', strength: '2mg', category: 'Anti-anginal' },
        { name: 'Glyceryl Trinitrate', strength: '10mg/10ml, 25mg/5ml, 50mg/10ml', category: 'Anti-anginal' },
        { name: 'Verapamil', strength: '5mg/2ml', category: 'Anti-anginal' },
        { name: 'Diltiazem', strength: '25mg/5ml', category: 'Anti-anginal' },
        { name: 'Procainamide', strength: '100mg/ml', category: 'Anti-arrhythmic' },
        { name: 'Amiodarone', strength: '150mg/3ml', category: 'Anti-arrhythmic' },
        { name: 'Adenosine', strength: '6mg/2ml', category: 'Anti-arrhythmic' },
        { name: 'Atropine Sulphate', strength: '0.6mg/ml', category: 'Anticholinergics' },
        { name: 'Milrinone', strength: '10mg, 20mg, 50mg', category: 'Cardiac Shock & Failure' },
        { name: 'Dobutamine', strength: '50mg/4ml, 250mg/20ml', category: 'Cardiac Shock & Failure' },
        { name: 'Dopamine', strength: '40mg/ml', category: 'Cardiac Shock & Failure' },
        { name: 'Digoxin', strength: '0.5mg/2ml', category: 'Cardiac Shock & Failure' },
        { name: 'Heparin', strength: '5000IU/5ml, 25000IU/5ml', category: 'Anti-coagulants' },
        { name: 'Nadroparin', strength: '3075IU, 4100IU, 6450IU, 8600IU', category: 'Anti-coagulants' },
        { name: 'Urokinase', strength: '250000 IU, 500000IU, 750000 IU, 1000000 IU', category: 'Thrombolytics' },
        { name: 'Streptokinase', strength: '750000IU, 1500000IU', category: 'Thrombolytics' }
      ]
    },
    {
      id: 4,
      title: 'Antibiotic/Anti-Infectives',
      icon: Activity,
      description: 'Wide range of antibiotics and anti-infective medications',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      products: [
        { name: 'Acyclovir Sodium', strength: '250mg, 500mg, 25mg/ml', category: 'Antiviral' },
        { name: 'Fosfomycin', strength: '80mg/2ml, 10mg/2ml, 20mg/2ml, 160mg/2ml', category: 'Antibiotic' },
        { name: 'Azithromycin', strength: '250mg, 500mg, 1g', category: 'Macrolide Antibiotic' },
        { name: 'Ganciclovir', strength: '500mg', category: 'Antiviral' },
        { name: 'Kanamycin', strength: '500mg, 1g', category: 'Aminoglycoside' },
        { name: 'Lincomycin', strength: '300mg, 1ml', category: 'Lincosamide' },
        { name: 'Amikacin', strength: '100mg/2ml, 250mg/2ml, 500mg/2ml, 1g', category: 'Aminoglycoside' },
        { name: 'Netilmicin Sulphate', strength: '10mg/ml, 25mg/ml, 50mg/ml, 100mg/ml', category: 'Aminoglycoside' },
        { name: 'Clindamycin Phosphate', strength: '300mg, 600mg', category: 'Lincosamide' },
        { name: 'Polymyxin B', strength: '500000IU', category: 'Polymyxin' },
        { name: 'Streptomycin', strength: '0.75g, 1g', category: 'Aminoglycoside' },
        { name: 'Tobramycin Sulphate', strength: '80mg/2ml', category: 'Aminoglycoside' },
        { name: 'Spectinomycin HCL', strength: '1g, 2g', category: 'Aminocyclitol' },
        { name: 'Teicoplanin', strength: '200mg, 400mg', category: 'Glycopeptide' },
        { name: 'Vancomycin Hydrochloride', strength: '500mg, 1g', category: 'Glycopeptide' },
        { name: 'Colistimethate Sodium', strength: '1Million, 2million, 3MillionIU', category: 'Polymyxin' },
        { name: 'Capreomycin', strength: '500mg, 1g', category: 'Anti-TB' },
        { name: 'Co-Trimoxazole', strength: '480mg, 960mg', category: 'Sulfonamide' },
        { name: 'Gentamicin Sulphate', strength: '40mg/ml', category: 'Aminoglycoside' },
        { name: 'Tigecycline', strength: '50mg', category: 'Glycylcycline' }
      ]
    },
    {
      id: 5,
      title: 'Herbal Extracts',
      icon: Leaf,
      description: 'Standardized herbal extracts from premium botanicals',
      color: 'bg-green-600',
      lightColor: 'bg-green-100',
      products: [
        { name: 'Ardusi Dry Extract', ratio: 'Standardized', applications: 'Respiratory conditions' },
        { name: 'Cinnamon Dry Extract', ratio: 'Standardized', applications: 'Antimicrobial and antioxidant' },
        { name: 'Tulsi Dry Extract', ratio: '5:1, 9:1', applications: 'Respiratory and immune support' },
        { name: 'Somavali Dry Extract', ratio: 'Standardized', applications: 'Traditional medicine' },
        { name: 'Menthol Dry Extract', ratio: 'Pure', applications: 'Cooling and respiratory relief' },
        { name: 'Amla Dry Extract', ratio: '4:1', applications: 'Vitamin C and antioxidant' },
        { name: 'Aloe Vera Dry Extract', ratio: '3:1', applications: 'Skin care and healing' },
        { name: 'Moringa Dry Extract', ratio: 'Standardized', applications: 'Nutritional supplement' },
        { name: 'Ashwagandha Extract', ratio: '2:1, 5:1, 10:1', applications: 'Adaptogenic and stress relief' },
        { name: 'Neem Dry Extract', ratio: '2:1, 7:1', applications: 'Antimicrobial and skin care' },
        { name: 'Pipar Dry Extract', ratio: 'Standardized', applications: 'Digestive and respiratory' },
        { name: 'Daruhaldi Dry Extract', ratio: 'Standardized', applications: 'Anti-inflammatory' },
        { name: 'Shatavari Dry Extract', ratio: '2:1, 4:1', applications: 'Women\'s health and vitality' },
        { name: 'Orange Peel Dry Extract', ratio: '5:1', applications: 'Digestive and flavoring' },
        { name: 'Guggul Dry Extract', ratio: '6:1', applications: 'Cholesterol management' },
        { name: 'Licorice Dry Extract', ratio: 'Standardized', applications: 'Respiratory and digestive' },
        { name: 'Fenugreek Dry Extract', ratio: '10:1', applications: 'Diabetes and lactation support' },
        { name: 'Triphala Dry Extract', ratio: '4:1', applications: 'Digestive health and detox' },
        { name: 'Gokhru Dry Extract', ratio: '10:1', applications: 'Urinary and kidney health' },
        { name: 'Haritaki Dry Extract', ratio: '4:1', applications: 'Digestive and detoxification' },
        { name: 'Vasaka Dry Extract', ratio: '5:1', applications: 'Respiratory conditions' },
        { name: 'Bringraj Dry Extract', ratio: '10:1', applications: 'Hair and liver health' },
        { name: 'Shankhpushpi Dry Extract', ratio: '10:1', applications: 'Brain and memory enhancement' },
        { name: 'Mulethi Dry Extract', ratio: '5:1', applications: 'Respiratory and digestive' },
        { name: 'Karela Dry Extract', ratio: '10:1', applications: 'Blood sugar management' },
        { name: 'Guduchi Dry Extract', ratio: '10:1', applications: 'Immune support and detox' },
        { name: 'Lemon Peel Extract', ratio: '5:1', applications: 'Antioxidant and flavoring' }
      ]
    },
    {
      id: 6,
      title: 'Essential Oils & Waxes',
      icon: Sparkles,
      description: 'Pure essential oils and pharmaceutical grade waxes',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      products: [
        { name: 'Shikakai Oil', purity: '100% Pure', applications: 'Hair care and cleansing' },
        { name: 'Mehndi Oil', purity: '100% Pure', applications: 'Hair conditioning and coloring' },
        { name: 'Neem Oil', purity: '100% Pure', applications: 'Antimicrobial and skin care' },
        { name: 'Karanj Oil', purity: '100% Pure', applications: 'Skin care and pest control' },
        { name: 'Custard Apple Oil', purity: '100% Pure', applications: 'Cosmetic and therapeutic use' },
        { name: 'Fish Oil', purity: 'Refined', applications: 'Omega-3 fatty acids supplement' },
        { name: 'Amla Oil', purity: '100% Pure', applications: 'Hair and skin nourishment' },
        { name: 'Argan Oil', purity: '100% Pure', applications: 'Premium cosmetic oil' },
        { name: 'Clove Oil', purity: '100% Pure', applications: 'Antiseptic and flavoring' },
        { name: 'Eucalyptus Oil', purity: '100% Pure', applications: 'Respiratory relief and antiseptic' },
        { name: 'Camphor Oil', purity: '100% Pure', applications: 'Topical analgesic' },
        { name: 'Fennel Oil', purity: '100% Pure', applications: 'Digestive and flavoring' },
        { name: 'Ginger Oil', purity: '100% Pure', applications: 'Digestive and warming' },
        { name: 'Orange Peel Oil', purity: '100% Pure', applications: 'Flavoring and aromatherapy' },
        { name: 'Nutmeg Oil', purity: '100% Pure', applications: 'Flavoring and therapeutic' },
        { name: 'Cumin Oil', purity: '100% Pure', applications: 'Digestive and flavoring' },
        { name: 'Dill Oil', purity: '100% Pure', applications: 'Digestive and antispasmodic' },
        { name: 'Tulsi Oil', purity: '100% Pure', applications: 'Respiratory and immune support' },
        { name: 'White Bees Wax', grade: 'Pharmaceutical', applications: 'Ointments and cosmetics' },
        { name: 'Hard Paraffin Wax', grade: 'Pharmaceutical', applications: 'Coating and binding agent' },
        { name: 'Yellow Bees Wax', grade: 'Pharmaceutical', applications: 'Traditional formulations' },
        { name: 'White Petroleum Jelly', grade: 'USP', applications: 'Moisturizer and barrier cream' }
      ]
    },
    {
      id: 7,
      title: 'Ophthalmic & Otic Preparations',
      icon: Eye,
      description: 'Specialized eye and ear drop formulations',
      color: 'bg-cyan-500',
      lightColor: 'bg-cyan-50',
      products: [
        { name: 'Ciprofloxacin Ophthalmic Solution', strength: '0.3% w/v', volume: '5ml, 10ml', applications: 'Bacterial eye infections' },
        { name: 'Gentamicin Eye & Ear Drops', strength: '0.3% w/v', volume: '5ml, 10ml', applications: 'Bacterial infections' },
        { name: 'Gentamicin + Dexamethasone', strength: '0.3% + 0.1%', volume: '5ml, 10ml', applications: 'Inflammatory eye conditions' },
        { name: 'Ofloxacin Ophthalmic Solution', strength: '0.3% w/v', volume: '3ml, 5ml, 10ml', applications: 'Broad spectrum antibiotic' },
        { name: 'Ofloxacin + Dexamethasone', strength: '0.3% + 0.1%', volume: '5ml, 10ml', applications: 'Anti-inflammatory antibiotic' },
        { name: 'Carboxymethyl Cellulose Eye Drops', strength: '0.5% w/v', volume: '10ml', applications: 'Dry eye lubricant' },
        { name: 'Moxifloxacin Eye Drops', strength: '0.5% w/v', volume: '5ml', applications: 'Fourth generation fluoroquinolone' },
        { name: 'Fluorometholone Acetate Suspension', strength: '0.1% w/v', volume: '5ml', applications: 'Anti-inflammatory steroid' },
        { name: 'Loteprednol Etabonate Suspension', strength: '0.5% w/v', volume: '5ml', applications: 'Corticosteroid anti-inflammatory' },
        { name: 'Moxifloxacin + Loteprednol', strength: '0.5% + 0.5%', volume: '5ml', applications: 'Combination therapy' },
        { name: 'Ofloxacin + Beclomethasone Ear Drops', strength: 'Combined', volume: '5ml', applications: 'Ear infections with inflammation' },
        { name: 'Tobramycin + Dexamethasone', strength: '0.3% + 0.1%', volume: '5ml, 10ml', applications: 'Severe inflammatory conditions' },
        { name: 'Ketorolac Ophthalmic Solution', strength: '0.5% w/v', volume: '5ml', applications: 'Post-operative inflammation' },
        { name: 'Prednisolone Acetate Suspension', strength: '1% w/v', volume: '10ml', applications: 'Inflammatory eye conditions' },
        { name: 'Timolol Tromethamine Solution', strength: '0.25%, 0.5%', volume: '5ml', applications: 'Glaucoma treatment' },
        { name: 'Dexamethasone Solution', strength: '1% w/v', volume: '5ml', applications: 'Anti-inflammatory steroid' },
        { name: 'Zinc Sulphate Eye Drops', strength: '0.25% w/v', volume: '10ml', applications: 'Astringent and antiseptic' },
        { name: 'Neomycin + Dexamethasone', strength: '0.35% + 0.1%', volume: '10ml', applications: 'Antibiotic with steroid' },
        { name: 'Dorzolamide Eye Drops', strength: '2.0% w/v', volume: '5ml', applications: 'Glaucoma carbonic anhydrase inhibitor' },
        { name: 'Chloramphenicol Ophthalmic Solution', strength: '0.5% w/v', volume: '5ml, 10ml', applications: 'Broad spectrum antibiotic' },
        { name: 'Flurbiprofen Sodium Solution', strength: '0.03% w/v', volume: '5ml', applications: 'NSAID for eye inflammation' },
        { name: 'Clotrimazole + Lignocaine Ear Drops', strength: 'Combined', volume: '15ml', applications: 'Antifungal with anesthetic' }
      ]
    },
    {
      id: 8,
      title: 'NSAIDs & Anti-inflammatory',
      icon: Activity,
      description: 'Non-steroidal anti-inflammatory drugs and pain management',
      color: 'bg-red-600',
      lightColor: 'bg-red-50',
      products: [
        { name: 'Lornoxicam', strength: '8mg', category: 'NSAID', applications: 'Anti-inflammatory and analgesic' },
        { name: 'Hydrocortisone Sodium Succinate', strength: '1mg, 200mg, 500mg', category: 'Corticosteroid', applications: 'Anti-inflammatory steroid' },
        { name: 'Dexamethasone Sodium Phosphate', strength: '4mg/ml', category: 'Corticosteroid', applications: 'Potent anti-inflammatory' },
        { name: 'Indomethacin', strength: '1mg', category: 'NSAID', applications: 'Anti-inflammatory for arthritis' },
        { name: 'Triamcinolone Acetonide', strength: '40mg/ml', category: 'Corticosteroid', applications: 'Long-acting anti-inflammatory' },
        { name: 'Betamethasone', strength: '6mg/ml', category: 'Corticosteroid', applications: 'Systemic anti-inflammatory' },
        { name: 'Diphenhydramine HCL', strength: '50mg/ml', category: 'Antihistamine', applications: 'Allergic reactions and sedation' },
        { name: 'Ademetionine Butanedisulfonate', strength: '500mg', category: 'Hepatoprotective', applications: 'Liver protection and depression' },
        { name: 'Pheniramine Maleate', strength: '22.75mg/ml', category: 'Antihistamine', applications: 'Allergic conditions' },
        { name: 'Dimenhydrinate', strength: '5ml', category: 'Antihistamine', applications: 'Motion sickness and nausea' }
      ]
    },
    {
      id: 9,
      title: 'Analgesics & Antipyretics',
      icon: Stethoscope,
      description: 'Pain relief and fever reduction medications',
      color: 'bg-yellow-500',
      lightColor: 'bg-yellow-50',
      products: [
        { name: 'Ketoprofen', strength: '100mg/2ml, 100mg/5ml', category: 'NSAID', applications: 'Pain and inflammation relief' },
        { name: 'Metamizole', strength: '1gm/2ml, 30ml', category: 'Analgesic', applications: 'Severe pain management' },
        { name: 'Piroxicam', strength: '20mg/ml', category: 'NSAID', applications: 'Arthritis and pain relief' },
        { name: 'Ketorolac Tromethamine', strength: '60mg/2ml, 30mg/ml', category: 'NSAID', applications: 'Post-operative pain' },
        { name: 'Aceclofenac', strength: '150mg/ml', category: 'NSAID', applications: 'Musculoskeletal pain' },
        { name: 'Paracetamol Injectable', strength: '75mg/ml, 150mg/ml', category: 'Analgesic', applications: 'Pain and fever reduction' },
        { name: 'Tramadol Hydrochloride', strength: '50mg/ml', category: 'Opioid Analgesic', applications: 'Moderate to severe pain' },
        { name: 'Lysine Acetylsalicylate', strength: '0.9g, 1.8g', category: 'Analgesic', applications: 'Pain relief and anti-platelet' }
      ]
    },
    {
      id: 10,
      title: 'Central Nervous System',
      icon: Package,
      description: 'Neurological and psychiatric medications',
      color: 'bg-indigo-500',
      lightColor: 'bg-indigo-50',
      products: [
        { name: 'Butorphanol', strength: '1mg/ml, 2mg/ml', category: 'Opioid Analgesic', applications: 'Moderate to severe pain' },
        { name: 'Sodium Valproate', strength: '500mg/5ml', category: 'Anticonvulsant', applications: 'Epilepsy and bipolar disorder' },
        { name: 'Fosphenytoin', strength: '50mg', category: 'Anticonvulsant', applications: 'Status epilepticus' },
        { name: 'Levetiracetam', strength: '50mg, 100mg, 250mg, 750mg, 1000mg', category: 'Anticonvulsant', applications: 'Epilepsy treatment' },
        { name: 'Phenytoin Sodium', strength: '25mg, 100mg, 250mg', category: 'Anticonvulsant', applications: 'Seizure control' },
        { name: 'Olanzapine', strength: '10mg/ml', category: 'Antipsychotic', applications: 'Schizophrenia and bipolar' },
        { name: 'Paliperidone Palmitate', strength: '100mg', category: 'Antipsychotic', applications: 'Long-acting antipsychotic' },
        { name: 'Midazolam', strength: '1mg/ml, 5mg/ml', category: 'Sedative', applications: 'Sedation and anxiety' },
        { name: 'Diazepam', strength: '5mg/ml', category: 'Anxiolytic', applications: 'Anxiety and muscle spasms' },
        { name: 'Lorazepam', strength: '2mg/ml, 4mg/ml', category: 'Anxiolytic', applications: 'Anxiety and seizures' }
      ]
    },
    {
      id: 11,
      title: 'Respiratory Medicines',
      icon: Package,
      description: 'Respiratory tract and pulmonary medications',
      color: 'bg-teal-500',
      lightColor: 'bg-teal-50',
      products: [
        { name: 'Caffeine Citrate', strength: '10mg/ml, 20mg/ml', category: 'Respiratory Stimulant', applications: 'Apnea of prematurity' },
        { name: 'Aminophylline', strength: '250mg/10ml', category: 'Bronchodilator', applications: 'Asthma and COPD' },
        { name: 'Ambroxol HCL', strength: '15mg/2ml', category: 'Mucolytic', applications: 'Respiratory secretions' },
        { name: 'Etofylline + Theophylline', strength: '2ml', category: 'Bronchodilator', applications: 'Bronchial asthma' },
        { name: 'Bromhexine HCL', strength: '4mg/2ml', category: 'Mucolytic', applications: 'Productive cough' }
      ]
    },
    {
      id: 12,
      title: 'Nutrition & Minerals',
      icon: Package,
      description: 'Vitamins, minerals and nutritional supplements',
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50',
      products: [
        { name: 'Vitamin B1+B6+B12', strength: '100mg+100mg+1000mcg', category: 'B-Complex', applications: 'Neurological disorders' },
        { name: 'Calcium Gluconate', strength: '10%', volume: '10ml', category: 'Mineral', applications: 'Calcium deficiency' },
        { name: 'Vitamin B Complex', strength: '100mg/ml', category: 'B-Complex', applications: 'Vitamin B deficiency' },
        { name: 'Vitamin B12', strength: '1000mcg/2ml', category: 'Vitamin', applications: 'B12 deficiency anemia' },
        { name: 'Mecobalamin Injection', strength: '1500mcg/ml', category: 'Vitamin B12', applications: 'Peripheral neuropathy' },
        { name: 'Glucose (Dextrose)', strength: '30%, 50%', category: 'Energy Source', applications: 'Hypoglycemia treatment' },
        { name: 'Folic Acid', strength: '15mg/10ml', category: 'Vitamin', applications: 'Folate deficiency' },
        { name: 'Potassium Chloride', strength: '10%', category: 'Electrolyte', applications: 'Potassium replacement' },
        { name: 'Magnesium Sulfate', strength: '50%', category: 'Mineral', applications: 'Magnesium deficiency' }
      ]
    },
    {
      id: 13,
      title: 'Anti-malarial & Tropical Diseases',
      icon: Activity,
      description: 'Antimalarial and tropical disease treatments',
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50',
      products: [
        { name: 'Quinine Dihydrochloride', strength: '100mg/ml, 250mg/2ml, 300mg/ml, 400mg/4ml', category: 'Antimalarial', applications: 'Severe malaria treatment' },
        { name: 'Artemether', strength: '20mg/ml, 80mg, 150mg/2ml', category: 'Antimalarial', applications: 'Severe malaria' },
        { name: 'Artesunate', strength: '30mg, 60mg, 120mg, 180mg, 150mg, 240mg', category: 'Antimalarial', applications: 'Artemisinin-based therapy' },
        { name: 'Chloroquine Phosphate', strength: '40mg, 64.5mg', category: 'Antimalarial', applications: 'Malaria prophylaxis' },
        { name: 'α-β Arteether', strength: '75mg, 150mg', category: 'Antimalarial', applications: 'Severe malaria treatment' }
      ]
    },
    {
      id: 14,
      title: 'Anaesthetics & Muscle Relaxants',
      icon: Syringe,
      description: 'Anaesthetic agents and neuromuscular blocking drugs',
      color: 'bg-slate-500',
      lightColor: 'bg-slate-50',
      products: [
        { name: 'Bupivacaine + Dextrose', strength: '5mg, 80mg', category: 'Local Anaesthetic', applications: 'Spinal anaesthesia' },
        { name: 'Bupivacaine', strength: '0.5%', volume: '4ml, 10ml, 20ml', category: 'Local Anaesthetic', applications: 'Regional anaesthesia' },
        { name: 'Lignocaine + Adrenaline', strength: '60mg+180mg/30ml', category: 'Local Anaesthetic', applications: 'Local anaesthesia with vasoconstriction' },
        { name: 'Ketamine Hydrochloride', strength: '10mg/ml, 50mg/ml', category: 'General Anaesthetic', applications: 'Induction and maintenance of anaesthesia' },
        { name: 'Lidocaine HCL + Epinephrine', strength: '36mg+0.0225mg', category: 'Local Anaesthetic', applications: 'Dental and minor procedures' },
        { name: 'Atracurium', strength: '10mg/ml', category: 'Muscle Relaxant', applications: 'Neuromuscular blockade' },
        { name: 'Succinylcholine Chloride', strength: '50mg/2ml, 200mg', category: 'Muscle Relaxant', applications: 'Rapid sequence intubation' },
        { name: 'Pancuronium', strength: '4mg/2ml', category: 'Muscle Relaxant', applications: 'Long-acting muscle relaxation' },
        { name: 'Thiopentone Sodium', strength: '500mg, 1g', category: 'General Anaesthetic', applications: 'Induction of anaesthesia' }
      ]
    },
    {
      id: 15,
      title: 'Pre-filled Syringes',
      icon: Syringe,
      description: 'Ready-to-use pre-filled syringes for immediate administration',
      color: 'bg-violet-500',
      lightColor: 'bg-violet-50',
      products: [
        { name: 'Enoxaparin Sodium', strength: '60mg', volume: '0.6ml', category: 'Anticoagulant', applications: 'Deep vein thrombosis prevention' },
        { name: 'Dobutamine', strength: '50mg/ml', volume: '5ml', category: 'Inotrope', applications: 'Heart failure management' },
        { name: 'Dopamine Hydrochloride', strength: '40mg/ml', volume: '5ml', category: 'Vasopressor', applications: 'Shock and hypotension' },
        { name: 'Heparin', strength: '5000IU, 1000IU', volume: '1ml, 5ml', category: 'Anticoagulant', applications: 'Anticoagulation therapy' },
        { name: 'Adenosine', strength: '3mg', volume: '2ml', category: 'Antiarrhythmic', applications: 'Supraventricular tachycardia' },
        { name: 'Noradrenaline Concentrate', strength: '2mg', volume: '4ml', category: 'Vasopressor', applications: 'Severe hypotension' },
        { name: 'Glycopyrrolate', strength: '0.2mg', volume: '1ml', category: 'Anticholinergic', applications: 'Reversal of neuromuscular blockade' },
        { name: 'Neostigmine', strength: '0.5mg', volume: '5ml', category: 'Cholinesterase Inhibitor', applications: 'Muscle relaxant reversal' },
        { name: 'Tranexamic Acid', strength: '100mg', volume: '5ml', category: 'Antifibrinolytic', applications: 'Bleeding control' },
        { name: 'Oxytocin', strength: '5IU', volume: '1ml, 2ml, 4ml, 5ml', category: 'Hormone', applications: 'Labor induction and bleeding control' },
        { name: 'Iron Sucrose', strength: '20mg', volume: '5ml', category: 'Iron Supplement', applications: 'Iron deficiency anemia' },
        { name: 'Sodium Hyaluronate', strength: '1.0% w/v', volume: '2ml', category: 'Viscosupplement', applications: 'Joint lubrication' },
        { name: 'Labetalol', strength: '5mg', volume: '4ml', category: 'Antihypertensive', applications: 'Hypertensive emergency' },
        { name: 'Granisetron Hydrochloride', strength: '1mg', volume: '1ml, 2ml, 3ml, 5ml', category: 'Antiemetic', applications: 'Chemotherapy-induced nausea' }
      ]
    },
    {
      id: 16,
      title: 'Topical Preparations',
      icon: Package,
      description: 'Ointments, creams, gels and topical formulations',
      color: 'bg-rose-500',
      lightColor: 'bg-rose-50',
      products: [
        { name: 'Aceclofenac + Linseed Oil + Methyl Salicylate Gel', strength: '1.5%+3%+10%', category: 'Topical NSAID', applications: 'Musculoskeletal pain relief' },
        { name: 'Azelaic Acid Cream', strength: '20% w/w', category: 'Dermatological', applications: 'Acne and hyperpigmentation' },
        { name: 'Beclomethasone + Neomycin + Clotrimazole Cream', strength: 'Combined', category: 'Triple Therapy', applications: 'Inflammatory skin conditions with infection' },
        { name: 'Betamethasone Valerate + Neomycin Cream', strength: '0.12%+0.5%', category: 'Corticosteroid + Antibiotic', applications: 'Infected inflammatory skin conditions' },
        { name: 'Betamethasone Dipropionate Cream', strength: '0.05% w/w', category: 'Topical Corticosteroid', applications: 'Eczema and dermatitis' },
        { name: 'Clotrimazole Cream', strength: '1%, 2% w/w', category: 'Antifungal', applications: 'Fungal skin infections' },
        { name: 'Clindamycin Phosphate Gel', strength: '1% w/w', category: 'Topical Antibiotic', applications: 'Acne vulgaris' },
        { name: 'Clindamycin + Nicotinamide Gel', strength: '1%+4%', category: 'Combination Therapy', applications: 'Acne treatment' },
        { name: 'Diclofenac Diethylamine Gel', strength: '1.16% w/w', category: 'Topical NSAID', applications: 'Local pain and inflammation' },
        { name: 'Hydrocortisone Acetate Cream', strength: '1% w/w', category: 'Mild Corticosteroid', applications: 'Minor skin inflammation' },
        { name: 'Ketoconazole Cream', strength: '2% w/w', category: 'Antifungal', applications: 'Fungal skin infections' },
        { name: 'Povidone Iodine Ointment', strength: '5% w/w', category: 'Antiseptic', applications: 'Wound care and infection prevention' },
        { name: 'Permethrin Cream', strength: '5% w/w', category: 'Antiparasitic', applications: 'Scabies treatment' },
        { name: 'Luliconazole Cream', strength: '1% w/w', category: 'Antifungal', applications: 'Dermatophyte infections' }
      ]
    },
    {
      id: 17,
      title: 'Anti-Ulcerants & Gastro-Intestinal',
      icon: Package,
      description: 'Gastric acid reducers, antiemetics and GI medications',
      color: 'bg-lime-500',
      lightColor: 'bg-lime-50',
      products: [
        { name: 'Famotidine', strength: '20mg/2ml, 200mg/20ml', category: 'H2 Receptor Blocker', applications: 'Peptic ulcer and GERD' },
        { name: 'Dicyclomine', strength: '10mg/ml, 20mg/2ml, 100mg/ml', category: 'Antispasmodic', applications: 'Irritable bowel syndrome' },
        { name: 'Esomeprazole', strength: '40mg', category: 'Proton Pump Inhibitor', applications: 'GERD and peptic ulcers' },
        { name: 'Hyoscine Butylbromide', strength: '20mg/ml', category: 'Antispasmodic', applications: 'Abdominal pain and spasms' },
        { name: 'Metadoxine', strength: '60mg/5ml', category: 'Hepatoprotective', applications: 'Alcohol intoxication and liver protection' },
        { name: 'Metoclopramide', strength: '10mg/2ml', category: 'Antiemetic', applications: 'Nausea and vomiting' },
        { name: 'L-Ornithine L-Aspartate', strength: '5mg/10ml', category: 'Hepatic Encephalopathy', applications: 'Liver detoxification' },
        { name: 'Omeprazole', strength: '40mg', category: 'Proton Pump Inhibitor', applications: 'Acid peptic disorders' },
        { name: 'Cimetidine', strength: '100mg/ml', category: 'H2 Receptor Blocker', applications: 'Peptic ulcer treatment' },
        { name: 'Pantoprazole', strength: '40mg', category: 'Proton Pump Inhibitor', applications: 'GERD and Zollinger-Ellison syndrome' },
        { name: 'Ranitidine', strength: '50mg/2ml, 10ml, 30ml', category: 'H2 Receptor Blocker', applications: 'Acid peptic disease' },
        { name: 'Lansoprazole', strength: '30mg', category: 'Proton Pump Inhibitor', applications: 'Gastric and duodenal ulcers' },
        { name: 'Ondansetron', strength: '2mg/ml, 4mg/ml', category: 'Antiemetic', applications: 'Chemotherapy-induced nausea' },
        { name: 'Palonosetron HCL', strength: '0.25mg/5ml', category: 'Antiemetic', applications: 'Prevention of nausea and vomiting' },
        { name: 'Granisetron', strength: '1mg/1ml, 1mg/5ml, 3mg/ml, 4mg/ml', category: 'Antiemetic', applications: 'Postoperative and chemotherapy nausea' }
      ]
    },
    {
      id: 18,
      title: 'Musculo-Skeletal Disorders',
      icon: Activity,
      description: 'Muscle relaxants and skeletal system medications',
      color: 'bg-stone-500',
      lightColor: 'bg-stone-50',
      products: [
        { name: 'Haloperidol', strength: '5mg/ml', category: 'Antipsychotic', applications: 'Schizophrenia and acute psychosis' },
        { name: 'Dexmedetomidine Hydrochloride', strength: '100mcg/ml', category: 'Sedative', applications: 'ICU sedation' },
        { name: 'Pipecuronium Bromide', strength: '2mg/ml', category: 'Muscle Relaxant', applications: 'Neuromuscular blockade' },
        { name: 'Diclofenac Sodium', strength: '75mg/3ml', category: 'NSAID', applications: 'Pain and inflammation' },
        { name: 'Meloxicam', strength: '15mg/1.5ml', category: 'NSAID', applications: 'Osteoarthritis and rheumatoid arthritis' },
        { name: 'Drotaverine', strength: '20mg/ml', category: 'Antispasmodic', applications: 'Smooth muscle spasm' },
        { name: 'Parecoxib', strength: '40mg/2ml', category: 'COX-2 Inhibitor', applications: 'Postoperative pain' },
        { name: 'Ibuprofen', strength: '5mg/ml', category: 'NSAID', applications: 'Pain and fever reduction' },
        { name: 'Thiocolchicoside', strength: '4mg/2ml', category: 'Muscle Relaxant', applications: 'Acute muscle spasm' },
        { name: 'Sugammadex', strength: '100mg/ml', category: 'Neuromuscular Blockade Reversal', applications: 'Reversal of muscle relaxation' },
        { name: 'Tolperisone Hydrochloride + Lidocaine', strength: '100mg+2.5mg', category: 'Muscle Relaxant', applications: 'Muscle spasticity' },
        { name: 'Vecuronium Bromide', strength: '4mg, 10mg, 20mg', category: 'Muscle Relaxant', applications: 'Surgical muscle relaxation' },
        { name: 'Rocuronium Bromide', strength: '10mg/ml', category: 'Muscle Relaxant', applications: 'Rapid sequence intubation' },
        { name: 'Glycopyrrolate', strength: '200mcg/ml', category: 'Anticholinergic', applications: 'Preoperative antisecretory' },
        { name: 'Dantrolene', strength: '20mg', category: 'Muscle Relaxant', applications: 'Malignant hyperthermia' }
      ]
    },
    {
      id: 19,
      title: 'Endocrine System',
      icon: Package,
      description: 'Hormonal and endocrine disorder medications',
      color: 'bg-pink-500',
      lightColor: 'bg-pink-50',
      products: [
        { name: 'Methylprednisolone Acetate', strength: '40mg/ml', category: 'Corticosteroid', applications: 'Anti-inflammatory and immunosuppressive' },
        { name: 'Terlipressin', strength: '1mg/10ml', category: 'Vasopressor', applications: 'Hepatorenal syndrome and variceal bleeding' },
        { name: 'Vasopressin', strength: '10Units, 20Units, 40Units', category: 'Hormone', applications: 'Diabetes insipidus and septic shock' },
        { name: 'Levothyroxine Injection', strength: '200mcg/ml', category: 'Thyroid Hormone', applications: 'Hypothyroidism' },
        { name: 'Methylprednisolone Sodium Succinate', strength: '20mg, 40mg, 120mg, 125mg, 500mg, 1g', category: 'Corticosteroid', applications: 'Severe inflammation and shock' },
        { name: 'Octreotide', strength: '50mcg/ml, 100mcg/ml', category: 'Somatostatin Analog', applications: 'Acromegaly and carcinoid syndrome' },
        { name: 'Somatostatin', strength: '3000mcg, 250mcg', category: 'Hormone', applications: 'GI bleeding and pancreatic disorders' },
        { name: 'Desmopressin', strength: '2.5ml, 4mcg/ml', category: 'Synthetic ADH', applications: 'Diabetes insipidus and hemophilia' }
      ]
    },
    {
      id: 20,
      title: 'B-Lactam Antibiotics',
      icon: Activity,
      description: 'Penicillins, Cephalosporins, Carbapenems and Monobactams',
      color: 'bg-red-700',
      lightColor: 'bg-red-100',
      products: [
        { name: 'Benzathine Penicillin', strength: '600MnIU, 1.2MnIU', category: 'Penicillin', applications: 'Syphilis and rheumatic fever prophylaxis' },
        { name: 'Ampicillin Sodium', strength: '100mg, 250mg, 500mg, 1g', category: 'Penicillin', applications: 'Bacterial infections' },
        { name: 'Ampicillin + Cloxacillin', strength: '250mg, 500mg', category: 'Penicillin Combination', applications: 'Mixed bacterial infections' },
        { name: 'Ampicillin + Sulbactam', strength: '750mg+250mg, 1g+500mg, 2g+1g', category: 'Penicillin + Beta-lactamase Inhibitor', applications: 'Resistant bacterial infections' },
        { name: 'Cloxacillin Sodium', strength: '250mg, 500mg, 1g', category: 'Penicillin', applications: 'Staphylococcal infections' },
        { name: 'Amoxicillin', strength: '250mg, 500mg, 1g', category: 'Penicillin', applications: 'Respiratory and urinary tract infections' },
        { name: 'Piperacillin', strength: '1g, 2g, 4g', category: 'Penicillin', applications: 'Severe bacterial infections' },
        { name: 'Piperacillin + Tazobactam', strength: '2.25g, 4.5g', category: 'Penicillin + Beta-lactamase Inhibitor', applications: 'Hospital-acquired infections' },
        { name: 'Ceftriaxone', strength: '125mg, 250mg, 500mg, 1g, 2g', category: 'Cephalosporin', applications: 'Wide spectrum bacterial infections' },
        { name: 'Cefoperazone + Sulbactam', strength: '500mg, 1.5g, 2g', category: 'Cephalosporin + Beta-lactamase Inhibitor', applications: 'Resistant gram-negative infections' },
        { name: 'Cefotaxime', strength: '250mg, 500mg, 1g, 2g', category: 'Cephalosporin', applications: 'Severe bacterial infections' },
        { name: 'Ceftazidime', strength: '250mg, 1g, 2g', category: 'Cephalosporin', applications: 'Pseudomonas infections' },
        { name: 'Cefepime', strength: '250mg, 500mg, 1g, 2g', category: 'Fourth Generation Cephalosporin', applications: 'Hospital-acquired infections' },
        { name: 'Meropenem', strength: '500mg, 1g, 2g', category: 'Carbapenem', applications: 'Severe multi-drug resistant infections' },
        { name: 'Imipenem + Cilastatin', strength: '250mg+250mg, 500mg+500mg', category: 'Carbapenem + Dehydropeptidase Inhibitor', applications: 'Life-threatening infections' },
        { name: 'Aztreonam', strength: '250mg, 500mg, 1g, 2g', category: 'Monobactam', applications: 'Gram-negative aerobic infections' }
      ]
    },
    {
      id: 21,
      title: 'Liquid Inhalation Anesthesia',
      icon: Package,
      description: 'Volatile anesthetic agents for general anesthesia',
      color: 'bg-sky-500',
      lightColor: 'bg-sky-50',
      products: [
        { name: 'Sevoflurane', strength: '50ml, 250ml', category: 'Inhalational Anesthetic', applications: 'Induction and maintenance of general anesthesia' },
        { name: 'Isoflurane', strength: '30ml, 100ml, 250ml', category: 'Inhalational Anesthetic', applications: 'Maintenance of general anesthesia' },
        { name: 'Halothane', strength: '250ml', category: 'Inhalational Anesthetic', applications: 'General anesthesia (limited use)' },
        { name: 'Adrenaline (Epinephrine)', strength: '1ml', category: 'Emergency Drug', applications: 'Cardiac arrest and severe allergic reactions' }
      ]
    },
    {
      id: 22,
      title: 'Specialty Injectable Products',
      icon: Syringe,
      description: 'Specialized and advanced injectable medications',
      color: 'bg-gray-600',
      lightColor: 'bg-gray-100',
      products: [
        { name: 'GLP-1 Receptor Agonist - Semaglutide', strength: '1.34mg/ml', category: 'Diabetes', applications: 'Type 2 diabetes and weight management' },
        { name: 'Trace Element Injection', strength: '10ml', category: 'Nutritional', applications: 'Micronutrient supplementation' },
        { name: 'Multielement Injection 5 Element', strength: 'Multidose', category: 'Nutritional', applications: 'Complete mineral supplementation' },
        { name: 'Sodium Ascorbic Acid', strength: '500mg, 50ml vial', category: 'Antioxidant', applications: 'Vitamin C deficiency and antioxidant support' },
        { name: 'Glutathione Injection', strength: '600mg, 1200mg', category: 'Antioxidant', applications: 'Liver detox and antioxidant therapy' },
        { name: 'N-acetyl-dl-Leucine', strength: '1000mg/10ml', category: 'Amino Acid', applications: 'Neurological disorders and recovery' },
        { name: 'Amphotericin B', strength: '50mg, 100mg', category: 'Antifungal', applications: 'Systemic fungal infections' },
        { name: 'Voriconazole', strength: '200mg', category: 'Antifungal', applications: 'Invasive aspergillosis' },
        { name: 'Caspofungin', strength: '50mg, 70mg', category: 'Antifungal', applications: 'Invasive candidiasis' }
      ]
    },
    {
      id: 23,
      title: 'Antidotes & Emergency Drugs',
      icon: Activity,
      description: 'Antidotes for poisoning and emergency medications',
      color: 'bg-red-600',
      lightColor: 'bg-red-50',
      products: [
        { name: 'Dimercaprol', strength: '50mg/ml', category: 'Heavy Metal Antidote', applications: 'Lead, arsenic, mercury poisoning' },
        { name: 'Pralidoxime Chloride', strength: '200mg, 500mg/20ml', category: 'Organophosphate Antidote', applications: 'Organophosphate poisoning' },
        { name: '2-Pyridine Aldoxime Methiodide', strength: '25mg/ml', category: 'Cholinesterase Reactivator', applications: 'Nerve agent poisoning' },
        { name: 'Adrenochrome Monosemicarabzone', strength: '5mg', category: 'Hemostatic', applications: 'Bleeding disorders' }
      ]
    },
    {
      id: 24,
      title: 'Vasodilators & Circulatory Drugs',
      icon: Activity,
      description: 'Vasodilation and peripheral circulation medications',
      color: 'bg-orange-600',
      lightColor: 'bg-orange-50',
      products: [
        { name: 'Alprostadil', strength: '20mcg/ml, 500mcg/ml', category: 'Prostaglandin E1', applications: 'Peripheral vascular disease and ductus arteriosus' },
        { name: 'Pentoxifylline', strength: '20mg/ml', category: 'Hemorheologic Agent', applications: 'Peripheral artery disease' }
      ]
    },
    {
      id: 25,
      title: 'Anti-Anemic & Iron Therapy',
      icon: Package,
      description: 'Iron supplements and anemia treatment medications',
      color: 'bg-red-500',
      lightColor: 'bg-red-50',
      products: [
        { name: 'Ferric Carboxymaltose Injection', strength: '50mg/ml', volume: '10ml', category: 'Iron Supplement', applications: 'Iron deficiency anemia' },
        { name: 'Iron Sucrose', strength: '100mg/5ml', category: 'Iron Supplement', applications: 'Iron deficiency in CKD patients' },
        { name: 'Iron Dextran', strength: '20mg/ml, 50mg/ml', category: 'Iron Supplement', applications: 'Severe iron deficiency anemia' }
      ]
    },
    {
      id: 26,
      title: 'Iron Chelating & Specialized Therapy',
      icon: Package,
      description: 'Iron chelation therapy and specialized treatments',
      color: 'bg-yellow-600',
      lightColor: 'bg-yellow-50',
      products: [
        { name: 'Deferoxamine For Injection', strength: '500mg, 2gm', category: 'Iron Chelator', applications: 'Iron overload and acute iron poisoning' },
        { name: 'Essential Phospholipids', strength: '250mg/5ml', category: 'Hepatic Stimulant', applications: 'Liver regeneration and protection' }
      ]
    },
    {
      id: 27,
      title: 'Vitamin-D Analogs',
      icon: Package,
      description: 'Specialized vitamin D analogs for specific conditions',
      color: 'bg-amber-600',
      lightColor: 'bg-amber-50',
      products: [
        { name: 'Paricalcitol Injection', strength: '2mcg/ml, 5mcg/ml', category: 'Vitamin D Analog', applications: 'Secondary hyperparathyroidism in CKD' }
      ]
    },
    {
      id: 28,
      title: 'Dental Anesthetics',
      icon: Syringe,
      description: 'Specialized dental cartridge anesthetics for dental procedures',
      color: 'bg-teal-600',
      lightColor: 'bg-teal-50',
      products: [
        { name: 'Articaine 4% + Adrenaline 1:100,000', volume: '1.8ml', category: 'Local Anesthetic', applications: 'Dental procedures and oral surgery' },
        { name: 'Lidocaine Hydrochloride', strength: '2%', volume: '1.8ml', category: 'Local Anesthetic', applications: 'Dental local anesthesia' },
        { name: 'Mepivacaine Hydrochloride', strength: '3%', volume: '1.8ml', category: 'Local Anesthetic', applications: 'Dental procedures without vasoconstrictor' },
        { name: 'Lignocaine HCl + Adrenaline', strength: '2% + 1:80,000', volume: '1.8ml', category: 'Local Anesthetic', applications: 'Dental anesthesia with hemostasis' },
        { name: 'Mepivacaine HCl + Noradrenaline', strength: '3% + 0.036mg', volume: '1.8ml', category: 'Local Anesthetic', applications: 'Dental anesthesia with vasoconstriction' },
        { name: 'Mepivacaine HCl + Adrenaline', strength: '3% + 0.018mg', volume: '1.8ml', category: 'Local Anesthetic', applications: 'Dental procedures with epinephrine' }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const filteredCategories = productCategories.map(category => ({
    ...category,
    products: category.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.applications && product.applications.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.products.length > 0 || searchTerm === '');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-darkblue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of high-quality pharmaceutical products manufactured 
              with precision and care to meet global healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products by name, category, or application..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of pharmaceutical products across multiple categories, 
              each designed to meet specific healthcare and industry needs.
            </p>
          </div>

          <div className="space-y-8">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Category Header */}
                  <div 
                    className="p-8 cursor-pointer transition-colors duration-300 hover:bg-gray-50"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                          <p className="text-gray-600 text-lg">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500 font-medium">
                          {category.products.length} Products
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-6 w-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Products */}
                  {isExpanded && (
                    <div className={`${category.lightColor} p-8 border-t border-gray-100`}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {category.products.map((product, index) => (
                          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h4>
                            
                            {/* Product Details */}
                            <div className="space-y-3">
                              {product.strength && (
                                <div>
                                  <span className="text-sm font-medium text-pharma-blue">Strength: </span>
                                  <span className="text-sm text-gray-700">{product.strength}</span>
                                </div>
                              )}
                              
                              {product.grade && (
                                <div>
                                  <span className="text-sm font-medium text-pharma-blue">Grade: </span>
                                  <span className="text-sm text-gray-700">{product.grade}</span>
                                </div>
                              )}
                              
                              {product.purity && (
                                <div>
                                  <span className="text-sm font-medium text-pharma-blue">Purity: </span>
                                  <span className="text-sm text-gray-700">{product.purity}</span>
                                </div>
                              )}
                              
                              {product.ratio && (
                                <div>
                                  <span className="text-sm font-medium text-pharma-blue">Ratio: </span>
                                  <span className="text-sm text-gray-700">{product.ratio}</span>
                                </div>
                              )}
                              
                              {product.volume && (
                                <div>
                                  <span className="text-sm font-medium text-pharma-blue">Volume: </span>
                                  <span className="text-sm text-gray-700">{product.volume}</span>
                                </div>
                              )}
                              
                              {product.category && (
                                <div>
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pharma-lightblue text-pharma-blue">
                                    {product.category}
                                  </span>
                                </div>
                              )}
                              
                              {product.applications && (
                                <div className="border-t border-gray-100 pt-3">
                                  <h5 className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-1">Applications:</h5>
                                  <p className="text-gray-600 text-sm leading-relaxed">{product.applications}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pharma-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">28</div>
              <div className="text-blue-100">Product Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">600+</div>
              <div className="text-blue-100">Total Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">32</div>
              <div className="text-blue-100">APIs Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">27</div>
              <div className="text-blue-100">Herbal Extracts</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">22</div>
              <div className="text-blue-100">Essential Oils</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Assurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product undergoes rigorous testing and quality control processes 
              to ensure safety, efficacy, and compliance with international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pharma-lightblue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pharma-blue font-bold text-xl">GMP</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">GMP Certified</h3>
              <p className="text-gray-600">Good Manufacturing Practices compliance across all facilities.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pharma-lightblue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pharma-blue font-bold text-xl">ISO</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">ISO 9001:2015</h3>
              <p className="text-gray-600">International quality management system certification.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pharma-lightblue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pharma-blue font-bold text-xl">FDA</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">FDA Approved</h3>
              <p className="text-gray-600">Products approved by major regulatory authorities worldwide.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pharma-lightblue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pharma-blue font-bold text-xl">cGMP</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">cGMP Guidelines</h3>
              <p className="text-gray-600">Current Good Manufacturing Practices for pharmaceutical quality.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Product?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? We offer custom manufacturing and 
            formulation services to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-pharma-blue text-white font-semibold rounded-lg hover:bg-pharma-darkblue transition-colors duration-300"
            >
              Request Quote
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
