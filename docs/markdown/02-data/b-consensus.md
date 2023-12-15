<!-- .slide: class="transition" -->
# Consensus

##==##

# Exercice de pensée

- Comment mettre d'accord tout le monde...
<br><br>
- dans un réseau décentralisé ... ?

##==##

<!-- .slide: class="full-center" -->

# Problème des généraux byzantins

![](./assets/images/02-data/byzantine-fault.svg)

##==##

# Se mettre d'accord

- le plus grand nombre doit fonctionner avec les mêmes règles
<br><br>
- pour faire avancer la chaîne de façon régulière

##==##

# Consensus connus

- PoW : Proof Of Work 💪
<br><br>
- PoS (DPoS) : (Delegated) Proof of Stake 🤑
<br><br>
- PoA : Proof of Authority 👮👮‍♂️

##==##

<!-- .slide: class="transition bg-white" -->

# Proof Of Work 💪

##==##

<!-- .slide: class="full-center" -->

# PoW 💪

![](./assets/images/02-data/pow.svg)

##==##

# PoW 💪

- Calcul distribué
<br><br>
- Résolution d'un puzzle cryptographique

##==##

# Puzzle cryptographique

- Trouvé un hash commençant par un nombre de zéros = difficulté
<br><br>
- Difficulté décidée par le réseau

##==##

# Trouver le bon hash pour résoudre le puzzle

- sha256("polytech") : 45b72f147be46d52cd8a793ea67f31b64d940ccad87c2befa670d1851069bdf8
<br><br>
- sha256("polytech0") : 977d583339c9148b9238baea9e5defb0def9f5256933e145134f009a8b504ac2
<br><br>
- sha256("polytech1") : b7c50838ecd6bdee7fabb0f57cf290a0940b710aefc5e217a471120f9b73e3cc
<br><br>
- ...
<br><br>
- sha256("polytech**8055722**") : **000000**cabd23299093c8dafec53663e501156b7925e4d50a202b9446ce8ebbe9 <br/> trouvé en **43s** !

##==##

# Réponse : le nonce

- nonce = **8055722**
<br/><br/>
- **000000**cabd23299093c8dafec53663e501156b7925e4d50a202b9446ce8ebbe9
<br/><br/>
- force brute

##==##

<!-- .slide: class="two-column" -->

# Mining

<br><br>
- tout le réseau mine
<br><br>
- pour avoir la récompense

##--##

![h-800](./assets/images/02-data/mining.svg)

##==##

<!-- .slide: class="transition bg-white" -->

# Pros/cons

##==##

# Pros

- sécurité du réseau
<br><br>
- n'importe qui peut participer

##==##

# Cons

- tout le réseau fait le même calcul en même temps
<br><br>
- course au minage (matériel)
<br><br>
- consommation électrique

##==##

<!-- .slide: class="transition bg-white" -->

# Proof of Stake 🤑

##==##

# Pas de force brute

- preuve de détention de crypto monnaie
<br><br>
- attention à la triche

##==##

# Sélection du validateur

- on ne parle plus de mineur
<br><br>
- un seul validateur possible par tour

##==##

<!-- .slide: class="transition bg-white" -->

# Pros/cons

##==##

# Pros

- plus de calcul par force brut
<br><br>
- consommation électrique réduite

##==##

# Cons

- peut favoriser les validateurs les plus riches

##==##

<!-- .slide: class="transition bg-white" -->

# Delegated Proof of Stake 🤑

##==##

# Délégation de validation

- voter pour un validateur
<br><br>
- pour déléguer la validation des blocks

##==##

<!-- .slide: class="transition bg-white" -->

# Proof of Authority 👮👮‍♂️

##==##

# J'ai le droit et pas toi

- une liste définie de validateurs
<br><br>
- qui sont certifiés sur la chaine