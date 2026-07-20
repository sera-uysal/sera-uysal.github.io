'use client';

import { useEffect, useReducer, useRef, useState } from 'react';

const ANIMATION_TICK_MS = 50;
const HOLD_TICKS_AFTER_MESSAGE = 50;

const messages = ['sserasahinli'];

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;
    const id = setInterval(() => savedCallback.current?.(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

interface AnimationState {
  idx: number;
  message: string;
  char: number;
  isActive: boolean;
}

type AnimationAction = { type: 'TICK'; loopMessage: boolean; hold: number };

function animationReducer(state: AnimationState, action: AnimationAction): AnimationState {
  if (action.type === 'TICK') {
    let newIdx = state.idx;
    let newChar = state.char;

    if (state.char - action.hold >= messages[state.idx].length) {
      if (action.loopMessage) {
        return { idx: 0, message: '', char: 0, isActive: true };
      }
      return { ...state, isActive: false };
    }

    return {
      idx: newIdx,
      message: messages[newIdx].slice(0, newChar),
      char: newChar + 1,
      isActive: true,
    };
  }
  return state;
}

export default function EmailLink({ loopMessage = false }: { loopMessage?: boolean }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  const [state, dispatch] = useReducer(animationReducer, {
    idx: 0,
    message: '',
    char: 0,
    isActive: true,
  });

  useInterval(
    () => {
      dispatch({ type: 'TICK', loopMessage, hold: HOLD_TICKS_AFTER_MESSAGE });
    },
    state.isActive && !reducedMotion ? ANIMATION_TICK_MS : null,
  );

  const displayMessage = reducedMotion || !state.isActive ? 'sserasahinli' : state.message;

  return (
    <div className="contact-email-container">
      <a href={`mailto:${displayMessage}@gmail.com`} className="contact-email-link">
        <span className="contact-email-prefix">{displayMessage}</span>
        <span className="contact-email-domain">@gmail.com</span>
      </a>
    </div>
  );
}
