'use client';

import React, { useMemo, useRef, useState } from 'react';
import { uploadReportPhotos } from '@/shared/api';
import {cn} from '@utils';
import classes from './LoadReport.cn';
import './LoadReport.scss';

export type LoadReportProps = {
  uploadUrl: string;
  maxFiles?: number;
  name?: string;
  accept?: string;
  className?: string;
  initialPreviews?: string[];
  onUploaded?: (response: unknown) => void;
};

export const LoadReport = ({
  uploadUrl,
  maxFiles = 3,
  name = 'files',
  accept = 'image/*',
  className,
  initialPreviews = [],
  onUploaded,
}: LoadReportProps) => {
  const [previews, setPreviews] = useState<string[]>(initialPreviews);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const emptySlots = useMemo(() => {
    const count = Math.max(maxFiles - previews.length, 0);
    return Array.from({length: count});
  }, [maxFiles, previews.length]);

  const handlePickFiles = () => {
    inputRef.current?.click();
  };

  const handleFilesSelected: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const filePreviews = files.map((f) => URL.createObjectURL(f));
    setPreviews((prev) => [...prev, ...filePreviews].slice(0, maxFiles));

    try {
      setIsUploading(true);
      const resp = await uploadReportPhotos(files, uploadUrl, {fieldName: name});
      onUploaded?.(resp);
    } finally {
      setIsUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

	const styles = classes();

  return (
    <div className={cn(styles.block, className)}>
      <div className={styles.elementSlots} onClick={handlePickFiles} role="button" tabIndex={0}
           onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePickFiles(); }}>
        {previews.slice(0, maxFiles).map((src, idx) => (
          <div className={cn(styles.elementSlot, `${styles.elementSlot}_filled`)} key={`preview-${idx}`}>
            <img className={styles.elementImage} src={src} alt="report" />
          </div>
        ))}
        {emptySlots.map((_, idx) => (
          <div className={styles.elementSlot} key={`empty-${idx}`} />
        ))}
      </div>

      <button className={styles.elementAddReport} type="button" onClick={handlePickFiles} disabled={isUploading}>
        <span className={styles.elementPlus}>+</span>
        <span className={styles.elementText}>Добавить фото отчет</span>
      </button>

      <input
				className={styles.elementInput}
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        onChange={handleFilesSelected}
      />
    </div>
  );
};
export default LoadReport;


