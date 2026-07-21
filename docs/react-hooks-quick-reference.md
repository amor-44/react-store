# React Hooks — Quick Reference

> مرجع سريع للمراجعة بعد إنهاء React وقبل الـ Interviews.
> القاعدة الذهبية: لا تستخدم Hook لمجرد أنك تعرفه؛ استخدمه عندما يحل مشكلة حقيقية.

---

## 🔥 لازم تتقنهم

### 1. useState
**الفكرة:** إدارة بيانات داخل Component تؤثر على الـ UI.

**متى أستخدمه؟**
- فتح/غلق Menu.
- Input values.
- Loading/Error states.
- Counter.
- أي قيمة تغييرها يجب أن يسبب Re-render.

**مثال:**
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);

setIsMenuOpen(prev => !prev);
```

**اسأل نفسك في Interview:**
- لماذا نستخدم functional update؟
- متى يحدث Re-render؟
- هل تحديث الـ State فوري؟

---

### 2. useEffect
**الفكرة:** تنفيذ Side Effects خارج عملية الـ Render.

**أمثلة:**
- API calls.
- التعامل مع localStorage.
- Event listeners.
- Timers.
- Synchronization مع أنظمة خارج React.

**Dependency Array:**
```tsx
useEffect(() => {
  // كل Render
});

useEffect(() => {
  // مرة واحدة بعد Mount
}, []);

useEffect(() => {
  // عند تغير value
}, [value]);
```

**ملاحظة مهمة:** لا تستخدم `useEffect` لحساب قيم يمكن حسابها أثناء الـ Render.

---

### 3. useRef
**الفكرة:** الاحتفاظ بقيمة بين الـ Renders بدون التسبب في Re-render، أو الوصول إلى DOM element.

**أمثلة:**
- `focus()`.
- Click Outside.
- Scroll.
- Video/Audio controls.
- حفظ timer ID أو previous value.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

inputRef.current?.focus();
```

**قاعدة:**
- القيمة تؤثر على UI؟ غالبًا `useState`.
- محتاج DOM أو قيمة تتغير بدون Re-render؟ غالبًا `useRef`.

---

### 4. useContext
**الفكرة:** مشاركة Data/State بين Components بدون تمرير Props عبر مستويات كثيرة.

**مناسب لـ:**
- Theme.
- Auth user.
- Language.
- Cart state.

**فكرته:**
```text
Context Provider
    ↓
Any Component داخل Provider
```

**تحذير:** Context ليس بديلًا تلقائيًا لكل State Management.

---

### 5. useReducer
**الفكرة:** إدارة State فيها منطق معقد أو Actions كثيرة.

```tsx
dispatch({ type: "ADD_ITEM", payload: product });
```

**مناسب لـ:**
- Cart.
- Forms مع حالات كثيرة.
- State transitions المعقدة.

**الفكرة الذهنية:**
```text
User Action
   ↓
dispatch
   ↓
reducer
   ↓
new state
   ↓
UI update
```

---

### 6. Custom Hooks
**الفكرة:** استخراج Logic قابل لإعادة الاستخدام في Hook خاص بك.

أمثلة:
```tsx
useFetch()
useLocalStorage()
useDebounce()
useClickOutside()
```

**قاعدة:** الـ Custom Hook يعيد استخدام الـ Logic، وليس UI.

---

# 🧠 مهم تفهمهم وتستخدمهم عند الحاجة

## 7. useMemo
**الفكرة:** حفظ نتيجة حسابية بين الـ Renders.

```tsx
const filteredProducts = useMemo(() => {
  return products.filter(product =>
    product.name.includes(search)
  );
}, [products, search]);
```

**استخدمه عندما:**
- الحساب مكلف.
- أو عندك سبب Performance واضح.

**لا تستخدمه لمجرد أن المشروع كبير.**

---

## 8. useCallback
**الفكرة:** حفظ Function reference بين الـ Renders.

مفيد خصوصًا مع:
- `React.memo`.
- Components تعتمد على reference equality.
- Custom Hooks.
- Optimization حقيقي.

```tsx
const handleDelete = useCallback((id: number) => {
  // ...
}, []);
```

**لا تستخدمه على كل Function.**

---

# 🧩 خريطة اختيار الـ Hook

| المشكلة | غالبًا استخدم |
|---|---|
| UI State | useState |
| Side Effect | useEffect |
| DOM / قيمة بدون Re-render | useRef |
| مشاركة State بين Components | useContext |
| State معقدة وActions كثيرة | useReducer |
| Logic متكرر | Custom Hook |
| حساب مكلف | useMemo |
| Function reference / memoization | useCallback |

---

# 🏪 أمثلة من React-Store

### Navbar
- `useState` → فتح/غلق Mobile Menu.
- `useRef` → Click Outside.
- `useEffect` → Event listener أو مزامنة Theme.

### Theme
- `useState` → Theme الحالية.
- `useEffect` → حفظ/قراءة Theme من localStorage.
- `useContext` → مشاركة Theme في كل التطبيق.

### Cart
- `useReducer` → ADD / REMOVE / UPDATE / CLEAR.
- `useContext` → إتاحة Cart لكل Components.

### Search
- `useState` → Search input.
- `useMemo` → فقط إذا كان Filtering مكلفًا فعلًا.
- Custom Hook → ممكن `useDebounce` لو احتجنا تأخير البحث.

---

# 🎯 Interview Refresh

قبل أي Interview راجع:

1. الفرق بين State وRef.
2. الفرق بين `useEffect` وEvent Handler.
3. Dependency Array.
4. لماذا لا نضع كل شيء في Context؟
5. `useReducer` vs `useState`.
6. متى تستخدم `useMemo`؟
7. متى تستخدم `useCallback`؟
8. ما هو Custom Hook؟
9. ما سبب Re-render؟
10. كيف تمنع Optimization غير الضروري؟

---

# ⭐ أهم قاعدة

> فهم المشكلة أولًا، ثم اختيار الـ Hook.

لا تحفظ:
> "عندي Hook إذن لازم أستخدمه."

فكر:
> "عندي مشكلة، ما الأداة الأنسب لحلها؟"

---

# بعد Hooks: ماذا بعد؟

بعد إتقان الأساسيات، ستتعامل مع Libraries وأدوات تساعدك في المشاريع الكبيرة، لكنها لا تلغي فهم Hooks.

أمثلة شائعة:
- React Router → Routing.
- TanStack Query → Server State / Fetching / Caching.
- Zustand → Client State Management.
- Redux Toolkit → State Management للمشاريع التي تحتاج Redux.
- React Hook Form → Forms.
- Zod → Validation / Schemas.

**المبدأ:** Libraries تساعدك في حل مشاكل أكبر، لكن أساس React يظل مهمًا.

---

## Roadmap مقترحة

```text
React Fundamentals
↓
Hooks
↓
Routing
↓
API / Async Data
↓
Forms + Validation
↓
State Management
↓
Testing
↓
Performance
↓
Deployment
```
